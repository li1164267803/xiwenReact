import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {Button} from 'antd'
class component extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:{
				title : {
					text: '某站点用户访问来源',
					subtext: '纯属虚构',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				},
				series : [
					{
						name: '访问来源',
						type: 'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:[
							{value:335, name:'直接访问'},
							{value:310, name:'邮件营销'},
							{value:234, name:'联盟广告'},
							{value:135, name:'视频广告'},
							{value:1548, name:'搜索引擎'}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			}
		}
	}
    getOption(){
		let echart = JSON.stringify(this.state.data)
		let newData = JSON.parse(echart)
	  	let tmp = [
			{value:5, name:'直接访问'},
			{value:6, name:'邮件营销'},
			{value:45, name:'联盟广告'},
			{value:15, name:'视频广告'},
			{value:457, name:'搜索引擎'}
		]
		newData.series[0]['data'] = tmp
		console.log(newData)
	  	this.setState({data:newData})
	}
	componentDidMount(){
		this.timer=setInterval(()=>{//轮询请求数据
			this.$axios.get('/piedata')
			.then((res)=>{
				// console.log(res)
				this.setState({data:res.data})
			})
		},1000)
	}
	componentWillUnmount(){
		console.log('卸载定时器')
		if(this.timer){
			clearInterval(this.timer)
		}
	}
    render() {
		console.log('render')
		let {data} = this.state
      return (
        <div>
			<Button onClick={this.getOption.bind(this)}>按钮更新</Button>
          <ReactEcharts option={data}></ReactEcharts>
        </div>
      )
    }
}
export default component