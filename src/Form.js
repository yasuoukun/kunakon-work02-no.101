import React,{ Component } from 'react'
import './App.css';


class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:''
	,phoneNo:'' ,sheednumrow: '1', select:'1',
	onlike:'ยืนยันแล้ว',timeDay:'' ,password:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
    
}

handleSubmit(event){
	const { email, name, age, address, phoneNo ,sheednumrow, onlike, select , timeDay,password} = this.state
	event.preventDefault()
	alert(`
	***โปรดตรวจสอบความถูกต้อง***
	จำนวนเอกสาร : ${sheednumrow}
	ชื่อ-สกุล : ${name}
	รหัสนักศึกษา : ${password}
    อีเมล : ${email}
	ที่อยู่ติดต่อ : ${address}
	อายุ : ${age}
	หมายเลขโทรศัพท์ : ${phoneNo}
	Select : ${select}
	Time : ${timeDay}
	การยินยอม : ${onlike}
	`)
	
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})	
}

render(){ 
	return(
        
	<form onSubmit={this.handleSubmit}>
        
		<input type='hidden' value={this.sheednumrow}></input>
		<div class="contentner">
		<div>
			<h1>ลงทะเบียนข้อมูล</h1>
		<label htmlFor='name' >ชื่อ-สกุล : </label>
		<input
            type='text'
			name='name'
			placeholder='กรุณากรอก ชื่อ-สกุล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
        <label htmlFor='password'>รหัสนึกศึกษา : </label>
        <input name='password' type='password' placeholder='กรุณากรอกรหัสนักศึกษา' 
        value={this.state.password} onChange={this.handleChange}></input>
       
        </div>
		<div>
		<label htmlFor='age' >อายุ : </label>
		<input
            type='number'
			name='age'
			placeholder='กรุณากรอกอายุ'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='email' yellow>อีเมล : </label>
		<input
            type='email'
			name='email'
			placeholder='กรุณากรอกอีเมล'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>ที่อยู่ติดต่อ : </label>
		
		
		<input
		type='textaera'
			name='address'
			placeholder='กรุณากรอกที่อยู่'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>หมายเลขโทรศัพท์ : </label>
		<input
            type='tel'
			name='phoneNo'
			placeholder='กรุณากรอกหมายเลขโทรศัพท์'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
        
        <div>
            <label>อนุญาตให้เก็บข้อมูล</label>
            <input type="radio" value={this.onlike} onChange={this.handleChange}></input>

        </div>
		<div>
		<select>
			<option value={this.date}>วันนี้</option>
		</select>
			<label >เวลาที่ส่ง</label>
			<input type='time' placeholder='day' value={this.timeDay}></input>
			
		</div>
		
		
		
		
		<button >บันทึกข้อมูล</button>
		</div>
	</form>
	)
}
}

export default Form
