<template>
<div id="signup-flexbox-container">
            <!-- Sign Up Form -->
            <div class="signup-form">
                <form @submit.prevent="onSubmit">
                    <h2> Sign up <br><br></h2>
                    <p>Create an account</p>
                    <input type="email" class="input-field" id="email" placeholder="Email" required>
                    <br>
                    <input type="password" class="input-field" id="password" placeholder="Password" v-model="password" :class="{ 'invalid-password': showErrorMessage }" required>
                    <br>
                    <button type="submit" class="signup-btn">Sign up</button>
                    <p class="error-message" v-if="showErrorMessage">Invalid password. <br><br> 
• The password should be between 8 to 15 characets. <br>
• One uppercase letter required. <br>
• Two lowercase letters required. <br>
• One numeric value required. <br>
• The password should start with an uppercase letter. <br>
• The password should include the character “_”</p>
                </form>
            </div>
        </div>
</template>

<script>
import router from '@/router';

export default {
    name: "SignUpBox",
    data() {
        return {
            password: '',
            showErrorMessage: false
        };
    },
    methods: {
        validatePassword() {
            const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Za-z\d_]{8,15}$/;
            return regex.test(this.password);
        },
        onSubmit() {
            if (this.validatePassword()){
                console.log('Password is valid');
                this.showErrorMessage = false;
                router.push('/')
            } else {
                console.log('Password is invalid');
                this.showErrorMessage = true;
            }
        }
    }
    }
</script>

<style>
/* Sign up page flexbox container div - id selector*/
#signup-flexbox-container {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Sign up form div - class selector */
.signup-form {
    max-width: 400px;
    width: 75%;
    padding: 40px;
    border-radius: 5px;
    text-align: center;
    background-color: #333;
    color: white;
}

/* Input field - class selector */
.input-field {
    width: 75%;
    margin: 8px;
    padding: 8px;
    border-radius: 2px;
    font-size: 18px;
    color: #333;
}

/* Sign up button - class selector */
.signup-btn {
    background-color: #595959;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 25px;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 25px;
    cursor: pointer;
}

.error-message {
    text-align: left;
}

.invalid-password {
    border: 2px solid red;
}

</style>