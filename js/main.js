var querySec = function (id1) {
    return document.querySelector(id1);
}

var getEle = function (id2) {
    return document.getElementById(id2);
}

querySec("#tinhTienBtn").addEventListener("click", () => {
    let loaiXe = querySec(`[name="selector"]:checked`).value;
    let soKm = querySec('#txtKm').value;
    let thoiGianCho = querySec('#txtWait').value;

    let bill = new Grab(loaiXe, soKm, thoiGianCho);
    // console.log(bill.toLocaleString());

    getEle('divThanhTien').style.display = 'block';
    getEle('xuatTien').innerHTML = bill.tinhTien().toLocaleString();
});

querySec('#inHoaDon').addEventListener('click', () => {
    let loaiXe = querySec(`[name="selector"]:checked`).value;
    let soKm = querySec('#txtKm').value;
    let thoiGianCho = querySec('#txtWait').value;

    let inBill = new Grab(loaiXe, soKm, thoiGianCho);

    getEle('tableHoaDon').style.display = 'block';
    getEle('kmDau').innerHTML = 1;
    getEle('giaBanDau').innerHTML = inBill.giaBanDau.toLocaleString();
    getEle('tienKmBanDau').innerHTML = inBill.tinhTienKmBanDau().toLocaleString();

    getEle('km2').innerHTML = inBill.soKm2;
    getEle('gia2').innerHTML = inBill.gia2.toLocaleString();
    getEle('tienKm2').innerHTML = inBill.tinhTienKm2().toLocaleString();

    getEle('km3').innerHTML = inBill.soKm3;
    getEle('gia3').innerHTML = inBill.gia3.toLocaleString();
    getEle('tienKm3').innerHTML = inBill.tinhTienKm3().toLocaleString();

    getEle('timeCho').innerHTML = inBill.thoiGianCho;
    getEle('giaCho').innerHTML = inBill.giaCho.toLocaleString();
    getEle('tienCho').innerHTML = inBill.tinhTienCho().toLocaleString();

    getEle('tongTien').innerHTML = 'Tổng tiền: ' + inBill.tinhTien().toLocaleString();
})