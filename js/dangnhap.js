function KiemTra()
{

	var ten = window.document.dangky.txtTenDN.value;
	var mk = window.document.dangky.txtMatKhau.value;
	var ad= "nhom12";
	var ad1= "nhom12";
	
if(ten!=ad)
	{
		window.alert(" Ban nhap sai ten tk ");
		window.document.dangky.txtTenDN.focus();
		return false;
	}

	if (mk!==ad1)
		{
		window.alert("Mat khau sai");
		document.dangky.txtMatKhau.focus();
		return false;
	 
		}
	
	else if (mk=ad1)
	window.alert("ĐĂNG NHẬP THÀNH CÔNG");
   
}