export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  description: string;
  questions: FaqQuestion[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    title: "Câu hỏi chung",
    description: "Giải đáp những câu hỏi phổ biến về dịch vụ, quy trình, giá, thời gian triển khai và hỗ trợ để bạn dễ dàng lựa chọn.",
    questions: [
      {
        question: "Tôi thực sự tiết kiệm được bao nhiêu tiền điện?",
        answer: "Mức tiết kiệm phụ thuộc diện tích mái và nhu cầu điện hiện tại. Hệ thống điện mặt trời dân dụng trung bình của Bống Media giúp giảm hóa đơn điện từ 50% đến 70% ngay từ đầu. Khi tư vấn, chúng tôi cung cấp báo cáo sản lượng điện mặt trời 3D với mức tiết kiệm dự kiến cụ thể.",
      },
      {
        question: "Đo đếm điện năng ròng là gì và có lợi ích gì?",
        answer: "Đo đếm điện năng ròng ghi nhận lượng điện dư mà tấm pin đưa lên lưới. Trong những giờ nắng, điện dư bù lại lượng điện bạn lấy từ lưới vào ban đêm, giúp giảm chi phí năng lượng ròng.",
      },
      {
        question: "Tấm pin có phát điện vào ban đêm hoặc ngày nhiều mây không?",
        answer: "Tấm pin không phát điện ban đêm nhưng vẫn tạo điện vào ngày nhiều mây ở mức khoảng 10% đến 25% công suất tối đa. Khi kết hợp pin lưu trữ hoặc đo đếm điện ròng, bạn có thể sử dụng nguồn năng lượng sạch ổn định 24/7.",
      },
      {
        question: "Mái nhà của tôi có phù hợp lắp điện mặt trời không?",
        answer: "Phần lớn mái nhà còn tốt và ít bị cây cối hoặc công trình xung quanh che bóng đều phù hợp. Đội ngũ khảo sát sẽ đánh giá kết cấu, độ dốc mái và mức tiếp xúc ánh nắng.",
      },
    ]
  },
  {
    title: "Dự án và quy trình",
    description: "Giải đáp những câu hỏi phổ biến về dịch vụ, quy trình, giá, thời gian triển khai và hỗ trợ để bạn dễ dàng lựa chọn.",
    questions: [
      {
        question: "Tuổi thọ và bảo hành trung bình của hệ thống điện mặt trời là bao lâu?",
        answer: "Tấm pin hiện đại có tuổi thọ thường từ 25 đến 30 năm hoặc hơn. Phần lớn hệ thống có bảo hành hiệu suất 25 năm, đảm bảo tấm pin duy trì ít nhất 80-85% hiệu suất ban đầu.",
      },
      {
        question: "Thiết kế và lắp đặt mất bao lâu?",
        answer: "Toàn bộ quy trình từ tư vấn, khảo sát, thiết kế riêng và xin phép đến lắp đặt thường mất 4 đến 8 tuần. Phần lắp đặt trên mái thường hoàn thành trong 1 đến 3 ngày.",
      },
      {
        question: "Tấm pin mặt trời cần bảo trì những gì?",
        answer: "Tấm pin cần ít bảo trì vì không có bộ phận chuyển động. Thông thường chỉ cần vệ sinh bụi, lá và rác định kỳ cùng kiểm tra chuyên môn hằng năm.",
      },
      {
        question: "Hệ thống có hoạt động khi lưới điện bị mất điện không?",
        answer: "Hệ thống hòa lưới thông thường tự ngắt khi mất điện để bảo vệ nhân viên điện lực. Nếu có pin dự phòng, hệ thống có thể tiếp tục cấp điện cho các mạch thiết yếu trong nhà.",
      },
    ]
  }
];
