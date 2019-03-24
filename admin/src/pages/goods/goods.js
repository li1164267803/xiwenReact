import React,{Component} from 'react';
import {Card,Table,Popconfirm,Button,Pagination,Spin,message} from 'antd'
// import Data from './data'
import './goods.less'
// import Item from 'antd/lib/list/Item';
class Goods extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[],
            spinning:true,
        }
        // ctime: "2019-01-04T01:36:57.570Z",
        // imgPath: "/static/img/product-dryfruit@1.png",
        // name: "@name",
        // price: "@integer(1, 300)",
        // themeid: 1,
        // type: 1,
        // typeName: "面食",
        // unit: "份",
        // _id: "@integer(1, 300)"
        this.columns=[{
            title: 'id',
            dataIndex: '_id',
            key: '_id',
            width:80,
            fixed:'left',
            align:'center',
          }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            width:100,
            align:'center',
          },{
            title:'商品类型',
            dataIndex:'type',
            key:'type',
            width:100,
            align:'center',
            render:(test)=>{
                let types=['热菜','凉菜','猛龙过江','辣椒炒月饼','火山飘雪']
                return(
                    <span>{types[test]}</span>
                )
                }
            },{
                title:'价格',
                dataIndex:'price',
                key:'price',
                width:80,
                align:'center',
                render(text){
                   return <span>${text}</span>
                }
              },{
              title:'图片',
              dataIndex:'imgPath',
              key:'imgPath',
              width:100,
              align:'center',
              render:(data)=>{
                //   console.log(data);
                  return(
                      <img src={data} width='50' alt=''/>
                  )
              }
          },{
            title:'操作',
            dataIndex:'Aciton',
            key:'Aciton',
            width:100,
            fixed:'right',
            align:'center',
            render:(tmp,data)=>{//两个参数  第二个参数为数据
                return(
                    <div>
                        <Popconfirm
                            title="确定要删除这条数据吗??" 
                            onConfirm={this.del.bind(this,data)} 
                            okText="确定" 
                            cancelText="取消"                            
                        >
                            <Button size='small' type='danger'>删除</Button>
                        </Popconfirm>
                        <Button size='small'>修改</Button>
                    </div>
                )
            }
          }]
    }
    del(data){
        // console.log(data)
        //假删除 不请求数据 直接去操作本地数据
        // this.$axios.get('/delProduct')
        // .then((result)=>{
        //     if(result.err===0){
        //         let tmpdata = this.state.dataSource.filter((item)=>{
        //             if(item._id==data._id){
        //                 return false
        //             }else{
        //                 return true
        //             }
        //         })
        //         message.success('删除成功',1);
        //         this.setState({dataSource:tmpdata})
        //     }else{
        //         message.error('删除失败',1)
        //     }
        // })
        this.$axios('/delProduct')
        .then((result)=>{
            if(result.err===0){
                message.success('删除成功',1)
                this.loadTableData()
            }else{
                message.error('删除失败',1)
            }
        })
    }
    componentDidMount(){
        console.log('挂载d ')
        this.loadTableData()
    }
    loadTableData(){
        this.$axios.get('/getProduct')
        .then((data)=>{
            console.log(data)
            this.setState({dataSource:data.dataSource,spinning:false})
        })
    }
    changePage(){
        this.loadTableData()
    }
    render() {
        console.log('render')
        let {spinning,dataSource} = this.state
      return (
        <Card>
            <Spin spinning={spinning}>
                <Table 
                    dataSource={dataSource}
                    columns={this.columns}
                    pagination={false}
                    scroll={{y:240,x:1300}}
                    bordered
                />
                <Pagination simple defaultCurrent={2} total={50} onChange={this.changePage.bind(this)}></Pagination>
            </Spin>
        </Card>
      )
    }
}
export default Goods