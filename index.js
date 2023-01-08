document.getElementById('btn-B1').onclick = function () {
    let diem1 = +domId('diem1-B1').value;
    let diem2 = +domId('diem2-B1').value;
    let diem3 = +domId('diem3-B1').value;
    let diemChuan = +domId('diemChuan-B1').value;
    let dt = domId('doiTuong-B1').value;
    let kv = domId('khuVuc-B1').value;


    let total = diem1 + diem2 + diem3 + khuVuc(kv) + doiTuong(dt);
    let result = '';
    if (total >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
        result = 'Bạn đã đậu với số điểm: ' + total;
    } else {
        result = 'Bạn đã rớt với số điểm: ' + total;
    }
    domId('result-B1').innerHTML = result;

}
function khuVuc(kv) {
    switch (kv) {
        case 'X':
            return 0;
            break;
        case 'A':
            return 2;
            break;
        case 'B':
            return 1;
            break;
        case 'C':
            return 0.5;

    }
    return diemKV;
}
function doiTuong(dt) {


    switch (dt) {
        case '0':
            return 0;
            break;
        case '1':
            return 2.5;
            break;
        case '2':
            return 1.5;
            break;
        case '3':
            return 1;

    }
}
function domId(id) {
    return document.getElementById(id);
}

// Bài 2
document.getElementById('btn-B2').onclick = function () {
    let soKw = +domId('soKw-B2').value;
    let hoTen = domId('hoTen-B2').value;
    let total = tinhTienDien(soKw);
    let result = '';

    if (total > 0) {
        result = 'Tổn tiền điện (Anh/Chị) ' + hoTen + ' cần phải thanh toán: ' + total + '.';
    } else {
        result = '(Anh/Chị) ' + hoTen + 'vui lòng nhập số kW điện đã sử dụng.'
    }
    domId('result-B2').innerHTML = result;
}
function tinhTienDien(soKw) {
    let total = 0;
    if (soKw > 0) {
        if (soKw <= 50) {
            total = soKw * 500;
        } else if (soKw <= 100) {
            total = 50 * 500 + (soKw - 50) * 650;
        } else if (soKw <= 200) {
            total = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
        } else if (soKw <= 350) {
            total = 50 * 500 + 50 * 650 + 100 * 850 + (sokW - 200) * 1100;
        } else {
            total = 50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (soKw - 350) * 1300;
        }
    }

    return total;
}


// Bài 3
domId('btn-B3').onclick = function () {
    let hoTen = domId('hoTen-B3').value;
    let thuNhap = +domId('thuNhap-B3').value;
    let soNguoi = +domId('soNguoi-B3').value;
    let thue = tinhThueTN(thuNhap, soNguoi);
    let result = '';
    if (thue > 0) {
        result = '(Anh/Chị) ' + hoTen + ' phải đóng số tiền thuế thu nhập cá nhân: ' + Intl.NumberFormat('en-US').format(tinhThueTN(thuNhap, soNguoi)) + ' (VND).';
    }
    else {
        result = '(Anh/Chị) ' + hoTen + ' vui lòng nhập tổng thu nhập năm.'
    }
    domId('result-B3').innerHTML = result;
}
// domId('thuNhap-B3').onchange = function (){
//     let thuNhap = +domId('thuNhap-B3').value;
//     if (thuNhap>1000){
//         domId('thuNhap-B3').value = Intl.NumberFormat('en-US').format(thuNhap);
//     }
// }

function tinhThueTN(thuNhap, soNguoi) {
    let thue = 0;
    let TNCT = 0;
    TNCT = thuNhap - (4e+6) - soNguoi * (1.6e+6);
    if (0 < TNCT && TNCT <= (60e+6)) {
        thue = TNCT * 0.05
    } else if (TNCT <= 120e+6) {
        thue = (60e+6) * 0.05 + (TNCT - 60e+6) * 0.1;
    } else if (TNCT <= 210e+6) {
        thue = (60e+6) * 0.05 + (60e+6) * 0.1 + (TNCT - 120e+6) * 0.15;
    } else if (TNCT <= 384e+6) {
        thue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (TNCT - 210e+6) * 0.2;
    } else if (TNCT <= 624e+6) {
        thue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (TNCT - 384e+6) * 0.25;
    } else if (TNCT <= 960e+6) {
        thue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 0.25 + (TNCT - 624e+6) * 0.3;
    } else if (TNCT > 960) {
        thue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 0.25 + (336e+6) * 0.3 + (TNCT - 960e+6) * 0.35;
    }
    return thue;
}

// Bài 4
domId('btn-B4').onclick = function () {
    let loaiKH = domId('loaiKH-B4').value;
    let maKH = domId('maKH-B4').value;
    let soKenh = +domId('soKenh-B4').value;
    let soKetNoi = +domId('soKetNoi-B4').value;
    let total = tinhTienCap(loaiKH, soKenh, soKetNoi);
    let result = '';
  
    if(total>0){
        result = 'Mã khách hàng: ' + maKH + '; Tiền cáp: ' + (new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)) + '.';
    } else if (total === 0){
        result = 'Mời khách hàng chọn loại khách hàng.';
    }
domId('result-B4').innerHTML = result;

}
domId('loaiKH-B4').onchange = function () {
    let loaiKH = domId('loaiKH-B4').value;
    if (loaiKH === 'DN') {
        domId('soKetNoi-B4').type = 'number';
        domId('soKetNoi-B4').placeholder = 'Số kết nối (>10 thì thêm 5$ /1 kết nối) ';
        domId('soKenh-B4').placeholder ='Số kênh cao cấp (50$ / kênh)';
    } else if (loaiKH==='ND'){
        domId('soKenh-B4').placeholder = 'Số kênh cao cấp (7.5$ / kênh)';
    } else {
        domId('soKetNoi-B4').type = 'hidden';
        domId('soKenh-B4').placeholder = 'Số kênh cao cấp';
    }
     
}
function tinhTienCap(loaiKH, soKenh, soKetNoi) {
    let total = 0;
    switch (loaiKH) {
        case 'ND': {
            total = 4.5 + 20.5 + soKenh*7.5;
        }; break;
        case 'DN':{
            if (0 < soKetNoi && soKetNoi <= 10) {
                total = 15 + 75 + soKenh*50;
            } else {
                if (soKetNoi > 10) {
                    total = 15 + 75 + soKenh*50 + (soKetNoi - 10) * 5;
                }
            }
        }; break;
        default: {
            total = 0;
        }
    }
    return total

}
//demo
// domId('demo').onkeyup =function() {
//    let XXX =  domId('demo').value;
//    domId('demo').value = new Intl.NumberFormat('en-US').format(XXX);
// }