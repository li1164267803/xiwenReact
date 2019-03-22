import React,{Component} from 'react'
import './login.less';
import { Form, Icon, Input, Button, Checkbox,} from 'antd';
class Login extends Component{
    login(){
        let data = this.props.form.getFieldsValue()//获取一组控件的值
        let data2 = this.props.form.getFieldValue ('username')//获取某一个的值
        console.log(data)
        console.log(data2)
    }
    render() {
      const { getFieldDecorator } = this.props.form;//表单的过滤验证
      return (
        <div className='login'>
            <Form>
                <Form.Item>
                    {
                        getFieldDecorator(
                            //配置信息
                            'username',
                            {
                                rules: [{ required: true, message: '用户名不能为空' },
                                        { min: 3, message: '不能少于3位' },
                                        { max: 10, message: '不能大于10位' },
                                        { pattern:/^[0-9]/g, message: '必须数字开头' },
                            
                                ],
                            }
                        )(
                            //要处理的组件
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator(
                            'password',
                            {
                                rules: [{ required: true, message: '密码不能为空' },
                                        { min: 3, message: '不能少于5位' },
                                        { max: 10, message: '不能大于10位' },
                                        { pattern:/^[a-zA-Z]/g, message: '必须字母开头' },
                            
                                ],
                            }
                        )(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.login.bind(this)}>登录</Button>
                </Form.Item>
            </Form>
        </div>
      )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);//高阶函数获取form属性
export default WrappedNormalLoginForm