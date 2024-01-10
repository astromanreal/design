import "./Uiregister.css"

export default function Uiregister() {
  return (
    <>
    <form class="Uiregister-form">
    <p class="Uiregister-title">Register </p>
    <p class="Uiregister-message">Signup now and get full access to our app. </p>
        <div class="Uiregister-flex">
        <label>
            <input required placeholder="" type="text" class="Uiregister-input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required placeholder="" type="text" class="Uiregister-input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required placeholder="" type="email" class="Uiregister-input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required placeholder="" type="password" class="Uiregister-input"/>
        <span>Password</span>
    </label>
    <label>
        <input required placeholder="" type="password" class="Uiregister-input"/>
        <span>Confirm password</span>
    </label>
    <button class="Uiregister-submit">Submit</button>
    <p class="Uiregister-signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
    </>
  )
}
