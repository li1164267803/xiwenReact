import React,{Component} from 'react';
import {Card,Table,Popconfirm,Button,Pagination,Spin} from 'antd'
// import Data from './data'
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
          }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
          },{
            title:'商品类型',
            dataIndex:'type',
            key:'type',
            render:(data)=>{
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
                render(text){
                   return <span>${text}</span>
                }
              },{
              title:'图片',
              dataIndex:'imgPath',
              key:'imgPath',
              render:(data)=>{
                  console.log(data);
                  return(
                      <img src={data} width='100' alt=''/>
                  )
              }
          },{
            title:'操作',
            dataIndex:'Aciton',
            key:'Aciton',
            render:(data)=>{
                return(
                    <div>
                        <Popconfirm
                            title="确定要删除这条数据吗??" 
                            onConfirm={this.del.bind(this)} 
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
    del(){
        alert('删除')
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
    render() {
        let {spinning,dataSource} = this.state
      return (
        <Card>
            <Spin spinning={spinning}>
                <Table 
                    dataSource={dataSource}
                    columns={this.columns}
                    pagination={false}
                    scroll={{y:240}}
                />
                <Pagination simple defaultCurrent={2} total={50}></Pagination>
            </Spin>
        </Card>
      )
    }
}
export default Goods