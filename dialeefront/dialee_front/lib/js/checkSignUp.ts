

export const checkUserName=(Id:string):string=>{
   
    Id=Id.trim();
    if(Id.search(/\s/) !=-1)
        return "아이디는 공백이 없어야합니다.";
  return Id.length>=1?Id.length<=8?"문제 없음":"8글자를 넘어설 수 없습니다.":"1글자 이상이어야 합니다.";
}
export const validatePassword=(pwd:string):string=>{
        pwd=pwd.trim();
        const checkNumber = pwd.search(/[0-9]/g);
	    const checkEnglish = pwd.search(/[a-z]/ig);
	    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(pwd)){            
	        return  `숫자+영문자+특수문자 조합으로 8자리 이상 16자리 이하여야 합니다.`;
	    }else if(checkNumber <0 || checkEnglish <0){
	        return "숫자와 영문자를 혼용하여야 합니다.";
	    }else if(pwd.search(/\s/) != -1)
            return "비밀번호는 공백 없이 입력해주세요.";
        return "문제 없음";
}
export const checkPassword=(oripwd:string,chkpwd:string):string=>{
    oripwd=oripwd.trim();
    chkpwd=chkpwd.trim();
    return oripwd==chkpwd?"문제 없음":"같지 않음";
}
export const checkEmail=(email:string):string=>{
    email=email.trim();
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
     return !reg_email.test(email)?"이메일 형식에 어긋납니다.":"문제 없음";                         
}
export const check=(type:string,value:string):string=>{
   
    if(type=="username")
        return checkUserName(value);
    if(type=="password1")
        return validatePassword(value);
    if(type=="email")
        return checkEmail(value);
    return "문제 없음";
}