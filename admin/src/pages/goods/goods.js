import React,{Component} from 'react';
import {Card,Table,Popconfirm,Button} from 'antd'
import Data from './data'
class Goods extends Component{
    constructor(){
        super()
        this.columns=[{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },{
              title:'头像',
              dataIndex:'ava',
              key:'ava',
              render:(data)=>{
                  console.log(data);
                  return(
                      <img src={data} width='100' />
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
                            okText="确定" cancelText="取消"
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
    render() {
      return (
        <Card>
          <Table dataSource={Data.dataSource} columns={this.columns} />
        </Card>
      )
    }
}
export default Goods