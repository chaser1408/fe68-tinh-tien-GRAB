class Grab {
    constructor(_loaiXe, _soKm, _thoiGianCho) {
        this.soKm3 = 0;
        this.thoiGianCho = _thoiGianCho;

        switch (_loaiXe) {
            case 'car':
                this.giaBanDau = 8000;
                this.gia2 = 7500;
                this.gia3 = 7000;
                this.giaCho = 2000;
                break;

            case 'suv':
                this.giaBanDau = 9000;
                this.gia2 = 8500;
                this.gia3 = 8000;
                this.giaCho = 3000;
                break;

            case 'black':
                this.giaBanDau = 10000;
                this.gia2 = 9500;
                this.gia3 = 9000;
                this.giaCho = 3500;
                break;

            default:
                break;
        }

        if (_soKm <= 19) {
            this.soKm2 = _soKm - 1;
        }
        else if (_soKm > 19) {
            this.soKm2 = 18;
            this.soKm3 = _soKm - 19;
        }
    }

    tinhTien() {
        return Math.ceil((this.thoiGianCho / 3)) * this.giaCho + this.giaBanDau + this.gia2 * this.soKm2 + this.gia3 * this.soKm3;
    }


    tinhTienKmBanDau() {
        return this.giaBanDau;
    }

    tinhTienKm2() {
        return this.gia2 * this.soKm2;
    }

    tinhTienKm3() {
        return this.gia3 * this.soKm3;
    }

    tinhTienCho() {
        return Math.ceil((this.thoiGianCho / 3)) * this.giaCho;
    }
}