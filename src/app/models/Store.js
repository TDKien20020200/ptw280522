const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	//Dia chi
	address: {
		type: String,
	},
	ward: {
		type: String
	},
	district: {
		type: String,
		//enum: ['Tây Hồ', 'Hoàng Mai', 'Thanh Xuân', 'Ba Đình', 'Nam Từ Liêm', 'Bắc Từ Liêm', 'Hai Bà Trưng']
	},
	//so dien thoai
	phonenumber: {
		type: Number
	},
	//kieu loai kinh doanh
	typestore: {
		type: String,
		//enum: ['Cơ sở sản xuất thực phẩm', 'Kinh doanh dịch vụ ăn uống', 'Cả 2']
	},
	//Chung nhan
	issue: {
		type: Number,
	},
	typeissue: {
		type: String,
		//enum: ['Chua co/Da bi thu hoi', 'Co nhung het han', 'Co va dung duoc']
	},
	created: {
		type: Date,
		// default: Date.now,
        // required: true
	},
	dated: {
		type: Date,
		// default: Date.now,
        // required: true
	},
	// thanh tra, kiem tra
	status: {
		type: String,
		// enum: ['Đã', 'Chưa']
	},
	testtime: {
		type: String,
	},
	testtimedmy: {
		type: String,
		// 03 tháng 8 năm 2020
	},
	priority: {
		type: Number,
		default: 1,
	},
	// buoc 1
	infrastructure: {
		type: String,
		// enum: ['Rất tốt', 'Tốt', 'Trung bình', 'Tệ']
	},
	service: {
		type: String,
		// enum: ['Rất tốt', 'Tốt', 'Trung bình', 'Tệ']
	},
	hygiene: {
		type: String,
		// enum: ['Rất tốt', 'Tốt', 'Trung bình', 'Tệ']
	},
	environment: {
		type: String,
		// enum: ['Rất tốt', 'Tốt', 'Trung bình', 'Tệ']
	},
	// buoc 2
	code: {
		type: String,
		// enum: ['Đã đánh mã', 'Chưa đánh mã'],
	},
	inspectionunit: {
		type: String,
		// enum: ['RED', 'GREEN', 'BLUE', 'GRAY']
	},
	sent: {
		type: String,
		// enum: ['Đã gửi', 'Chưa gửi'],
	},
	datereceive: {
		type: Date,
		// testtime + 1week
	},
	result: {
		type: String,
		// enum: ['Rất tốt', 'Tốt', 'Trung bình', 'Tệ'],
	},
	// buoc 3
	conclusion: {
		type: String,
		// enum: ['Đủ điều kiện', 'Không đủ điều kiện'],
	},
	// buoc 4
	infringe: {
		type: String,
		// enum: ['Thu hồi Giấy chứng nhận', 'Xử phạt hành chính', 'Không có vi phạm'],
	}

})

module.exports = mongoose.model('stores', StoreSchema)
