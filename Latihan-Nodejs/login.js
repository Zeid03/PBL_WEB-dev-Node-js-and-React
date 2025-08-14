function verifikasiLogin(user, pass) {
    try{
        if (typeof user !== "string" || typeof pass !== "number") {
            throw new Error("Username harus string dan password harus number!");
        }
        if (user === "admin" && pass === 1234) {
             console.log("Login successful!");
         } else {
             console.log("Login failed!");
         }   
    }catch(error){
        console.error("An error occurred:", error.message);
    }
}
verifikasiLogin("admin", 1234);
verifikasiLogin("user", 1234);
verifikasiLogin(123,true);
