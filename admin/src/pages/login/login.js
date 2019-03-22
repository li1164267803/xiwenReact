import React,{Component} from 'react'
import './login.less';
import { Form, Icon, Input, Button, Checkbox,Card,message} from 'antd';
  
  class NormalLoginForm extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {//成功
          this.$axios.get('/login')
          .then((data)=>{
              if(data.err===1){//成功
                message.success('登录成功，2秒后自动跳转',2,()=>{
                    this.props.history.push('/admin')
                });
              }else{//失败
                message.error(data.msg,1)
              }
          })
          .catch(()=>{

          })
        }else{
            // setTimeout(()=>{
            //     message.success('登录成功，3秒自动跳转',3,()=>{
            //         this.props.history.push('/admin')
            //     })
            // //    message.error('登录失败请重试',1)
            // },1000)
        }
      });
    }
    login(){
        let data = this.props.form.getFieldsValue()//获取一组控件的值
        let data2 = this.props.form.getFieldValue ('username')//获取某一个的值
        console.log(data)
        console.log(data2)
    }
    render() {
      const { getFieldDecorator } = this.props.form;//表单的过滤验证
      return (
        <Card className='login'
              title='LOGIN IN'>
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {
                getFieldDecorator(
                    //配置信息
                    'userName',
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
                {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
                })(
                <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="##">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                登录
                </Button>
                Or <a href="##">&nbsp;现在注册 !</a>
            </Form.Item>
            </Form>
        </Card>
      );
    }
  }
  
export default Form.create({ name: 'normal_login' })(NormalLoginForm);
  