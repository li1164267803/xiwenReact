import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import menuData from './rootMenu.js'
import { Menu, Icon } from 'antd';
import './navleft.less';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default withRouter( class NavLeft extends Component{
    jump(path){
        console.log(path,this)
        this.props.history.push(path)
    }
    rendlist(data){//渲染界面
        // let data = menuData.menuData
        console.log(data);
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu key={item.id} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
                        {this.rendlist(item.children)}
                        {/* 递归 自己调用自己产生下级 */}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.id} onClick={this.jump.bind(this,item.path)}>
                    <span>{item.name}</span>
                </Menu.Item>
            )
        })
    }
    render() {
      return (
        <div className='navleft'>
            <Menu>
                {this.rendlist(menuData.menuData)}
            </Menu>
        </div>
      )
    }
})