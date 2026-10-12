import { StaticImageData } from "next/image";
import serviceA from "@/images/service-a.jpg";
import serviceB from "@/images/service-b.jpg";
import serviceC from "@/images/service-c.jpg";
import serviceD from "@/images/service-d.jpg";
import serviceE from "@/images/service-e.jpg";
import serviceF from "@/images/service-f.jpg";
import serviceLargeA from "@/images/service-large-a.jpg";
import serviceLargeB from "@/images/service-large-b.jpg";
import serviceCover from "@/images/service-cover.jpg";

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: StaticImageData;
  bannerImage: StaticImageData;
  features: string[];
  benefits: ServiceBenefit[];
  specifications: ServiceSpecification[];
  faqs: ServiceFaq[];
}

export const SERVICE_DATA: ServiceItem[] = [
  {
    id: '1',
    title: "Điện mặt trời dân dụng",
    subtitle: "Nguồn điện sạch, yên tĩnh và độc lập cho ngôi nhà hiện đại",
    description: "Hệ thống điện mặt trời tiên tiến dành cho gia chủ ưu tiên tính bền vững và khả năng tự chủ chi phí.",
    fullDescription: "Hệ thống điện mặt trời dân dụng biến mái nhà thành nguồn điện sạch riêng của bạn. Kết hợp tấm pin đơn tinh thể Tier-1, bộ vi biến tần thông minh và giám sát năng lượng trên nền tảng đám mây, chúng tôi giúp giảm hóa đơn điện hằng tháng tới 80% và tăng khả năng tự chủ năng lượng.",
    image: serviceA,
    bannerImage: serviceLargeA,
    features: [
      "Tấm pin đơn tinh thể Tier-1 hiệu suất cao",
      "Kiến trúc vi biến tần tích hợp tối ưu sản lượng",
      "Tích hợp cơ chế bù trừ điện năng và lắp công tơ hai chiều",
      "Theo dõi năng lượng và khoản tiết kiệm theo thời gian thực trên ứng dụng",
      "Bảo hành toàn diện về khả năng chịu thời tiết và hiệu suất trong 25 năm"
    ],
    benefits: [
      {
        title: "Giảm mạnh hóa đơn điện",
        description: "Giảm ngay mức phụ thuộc vào lưới điện và duy trì chi phí điện thấp trong nhiều thập kỷ."
      },
      {
        title: "Tăng giá trị bất động sản",
        description: "Nhà có hệ thống điện mặt trời thường bán nhanh hơn và có giá trị cao hơn."
      },
      {
        title: "Nguồn điện ổn định 24/7",
        description: "Kết hợp pin lưu trữ để duy trì chiếu sáng và các thiết bị thiết yếu khi mất điện lưới."
      }
    ],
    specifications: [
      { label: "Dải công suất hệ thống", value: "4 kW – 20 kW dân dụng" },
      { label: "Hiệu suất tấm pin", value: "Đơn tinh thể, tới 22.8%" },
      { label: "Thời hạn bảo hành", value: "Bảo hành công suất tuyến tính 25 năm" },
      { label: "Thời gian hoàn vốn", value: "Hoàn vốn trung bình 3.5–5 năm" }
    ],
    faqs: [
      {
        question: "Lắp điện mặt trời dân dụng mất bao lâu?",
        answer: "Việc lắp đặt trên mái thường mất 1–2 ngày. Toàn bộ quá trình, gồm xin phép, kiểm tra của đơn vị điện lực và kích hoạt bù trừ điện năng, trung bình mất 2–3 tuần."
      },
      {
        question: "Hệ thống hoạt động thế nào khi trời nhiều mây hoặc mưa?",
        answer: "Tấm pin vẫn tạo điện từ ánh sáng tán xạ xuyên qua mây. Phần thiếu hụt được bù bằng điện lưới hoặc hệ thống pin dự phòng đã kết nối."
      },
      {
        question: "Tấm pin có làm hỏng mái nhà không?",
        answer: "Không. Đội ngũ lắp đặt được chứng nhận sử dụng chi tiết chống thấm và hệ giá đỡ được thiết kế chịu gió lớn, bảo vệ kết cấu mái."
      }
    ]
  },
  {
    id: '2',
    title: "Điện mặt trời thương mại",
    subtitle: "Hệ thống năng lượng công nghiệp tối ưu lợi nhuận đầu tư của doanh nghiệp",
    description: "Giải pháp năng lượng công nghiệp của Bống Media tối ưu chi phí vận hành và cải thiện các chỉ số ESG của doanh nghiệp.",
    fullDescription: "Chi phí điện tác động trực tiếp đến biên lợi nhuận. Bống Media thiết kế hệ thống điện mặt trời trên mái, mái che bãi xe và mặt đất cho nhà máy, khu văn phòng, kho hàng và trung tâm bán lẻ. Giải pháp giúp hoàn vốn nhanh nhờ ưu đãi thuế, khấu hao nhanh và giảm nhu cầu công suất giờ cao điểm.",
    image: serviceB,
    bannerImage: serviceLargeB,
    features: [
      "Giá đỡ thương mại và hệ lắp mái dùng đối trọng tùy chỉnh",
      "Phân tích giảm phụ tải đỉnh và cân bằng tải",
      "Hỗ trợ khấu hao nhanh (MACRS) và tín dụng thuế liên bang",
      "Cấu hình biến tần trung tâm và biến tần chuỗi cao áp",
      "Tích hợp SCADA giám sát hệ thống năng lượng doanh nghiệp"
    ],
    benefits: [
      {
        title: "Chi phí vận hành dễ dự tính",
        description: "Bảo vệ doanh nghiệp trước biến động giá điện bằng nguồn điện mặt trời có chi phí thấp và ổn định."
      },
      {
        title: "Củng cố chỉ số ESG của doanh nghiệp",
        description: "Thể hiện trách nhiệm môi trường bằng hành động cụ thể với cổ đông, khách hàng và đối tác."
      },
      {
        title: "Hoàn vốn đầu tư nhanh",
        description: "Tín dụng thuế thương mại và giảm phụ tải đỉnh giúp phần lớn hệ thống doanh nghiệp hoàn vốn trong dưới 4 năm."
      }
    ],
    specifications: [
      { label: "Dải công suất hệ thống", value: "50 kW – 5 MW thương mại" },
      { label: "Loại biến tần", value: "Biến tần chuỗi / trung tâm hiệu suất cao" },
      { label: "Hệ thống giám sát", value: "SCADA doanh nghiệp và truy cập API" },
      { label: "Thời gian hoàn vốn", value: "3–4 năm" }
    ],
    faqs: [
      {
        question: "Lắp đặt có gián đoạn hoạt động kinh doanh không?",
        answer: "Không. Việc đấu nối điện và lắp kết cấu được sắp xếp ngoài giờ cao điểm hoặc vào cuối tuần để duy trì hoạt động thường ngày."
      },
      {
        question: "Có thể khai thác mái nhà thương mại chưa sử dụng không?",
        answer: "Có. Điện dư từ hệ thống thương mại có thể đưa lên lưới thông qua chương trình bù trừ điện năng hoặc hợp đồng mua bán điện (PPA)."
      }
    ]
  },
  {
    id: '3',
    title: "Pin lưu trữ",
    subtitle: "Nguồn điện liên tục 24/7 và quản lý lưới điện thông minh",
    description: "Duy trì nguồn điện ổn định 24/7 với hệ pin lưu trữ treo tường công nghệ cao. Chủ động sử dụng năng lượng theo nhu cầu.",
    fullDescription: "Điện mặt trời dồi dào vào ban ngày, trong khi nhu cầu điện cao nhất của gia đình và doanh nghiệp thường vào buổi tối. Hệ pin lithium sắt photphat (LFP) tiên tiến lưu trữ điện dư để dùng khi giá điện tăng hoặc khi bão gây mất điện.",
    image: serviceC,
    bannerImage: serviceCover,
    features: [
      "Công nghệ lithium sắt photphat (LFP) tối ưu an toàn nhiệt",
      "Bộ chuyển nguồn tự động tức thời (dự phòng <10ms)",
      "Tối ưu thông minh theo biểu giá điện theo thời gian (TOU)",
      "Mở rộng dung lượng theo mô-đun từ 5 kWh đến hơn 100 kWh",
      "Bảo hành thay thế pin toàn diện trong 10 năm"
    ],
    benefits: [
      {
        title: "An tâm khi điện lưới gián đoạn",
        description: "Duy trì tủ lạnh, thiết bị y tế, điều hòa và WiFi khi có sự cố thời tiết."
      },
      {
        title: "Tối ưu chi phí theo khung giờ",
        description: "Tự động sử dụng điện từ pin vào giờ giá điện cao để giảm chi phí."
      },
      {
        title: "Khả năng vận hành hoàn toàn độc lập",
        description: "Lưu điện mặt trời ban ngày để cấp điện cho toàn bộ công trình vào ban đêm."
      }
    ],
    specifications: [
      { label: "Công nghệ pin", value: "Lithium sắt photphat (LiFePO4)" },
      { label: "Dung lượng lưu trữ", value: "10 kWh – 200 kWh theo mô-đun" },
      { label: "Thời gian chuyển nguồn", value: "< 10 mili giây (tức thời)" },
      { label: "Tuổi thọ chu kỳ", value: "Hơn 6,000 chu kỳ ở độ sâu xả 80% DoD" }
    ],
    faqs: [
      {
        question: "Hệ pin lưu trữ có thể cấp điện trong bao lâu?",
        answer: "Tùy dung lượng pin và cấu hình tải thiết yếu, hệ dân dụng tiêu chuẩn có thể cấp điện cho các tải quan trọng trong 24–72 giờ, tự sạc lại mỗi ngày khi có nắng."
      },
      {
        question: "Pin LFP có an toàn để lắp trong nhà không?",
        answer: "Có. Pin LFP (lithium sắt photphat) có độ ổn định nhiệt cao, vật liệu không độc hại và cơ chế chống cháy tích hợp."
      }
    ]
  },
  {
    id: '4',
    title: "Trạm sạc xe điện",
    subtitle: "Hạ tầng sạc xe điện trọn gói cho gia đình và doanh nghiệp",
    description: "Lắp đặt trạm sạc xe điện (EV) trọn gói cho nhà ở, bãi đỗ xe thương mại và đội xe doanh nghiệp.",
    fullDescription: "Sạc xe điện trực tiếp bằng năng lượng mặt trời. Bống Media lắp bộ sạc nhanh Level 2 cho gia đình và bộ sạc nhanh DC cho trung tâm thương mại, bãi xe doanh nghiệp và đội xe. Hệ thống tích hợp với điện mặt trời và nền tảng thanh toán đám mây.",
    image: serviceD,
    bannerImage: serviceLargeA,
    features: [
      "Sạc Level 2 tốc độ cao (48A) và sạc nhanh DC (tới 180kW)",
      "Chế độ sạc trực tiếp từ điện mặt trời",
      "Quản lý đám mây theo chuẩn OCPP và truy cập RFID",
      "Thiết bị thanh toán tích hợp để khai thác trạm sạc thương mại",
      "Vỏ chống thời tiết đạt chuẩn NEMA 4X / IP66"
    ],
    benefits: [
      {
        title: "Sạc xe bằng điện mặt trời miễn phí",
        description: "Cấp điện cho xe bằng nguồn điện xanh từ hệ thống điện mặt trời trên mái của bạn."
      },
      {
        title: "Thu hút khách hàng và khách thuê",
        description: "Cung cấp tiện ích sạc xe điện để khách lưu lại lâu hơn và tăng sức hút của bất động sản thương mại."
      },
      {
        title: "Khai thác doanh thu trạm sạc",
        description: "Thiết lập phí sạc theo kWh hoặc thời lượng phiên qua phần mềm thanh toán tự động."
      }
    ],
    specifications: [
      { label: "Loại bộ sạc", value: "Sạc AC Level 2 và sạc nhanh DC" },
      { label: "Công suất đầu ra", value: "7.6 kW – 180 kW, hai cổng" },
      { label: "Kết nối", value: 'Wi-Fi, Ethernet, 4G LTE, OCPP 1.6J' },
      { label: "Chuẩn bảo vệ vỏ", value: "NEMA 4X / IP66, phù hợp ngoài trời" }
    ],
    faqs: [
      {
        question: "Có thể sạc xe ban đêm bằng năng lượng mặt trời không?",
        answer: "Có. Khi kết hợp tấm pin với hệ lưu trữ Bống Media, điện tạo ra ban ngày được lưu lại để sạc nhanh cho xe vào ban đêm."
      },
      {
        question: "Cần nâng cấp điện gì để lắp bộ sạc Level 2 tại nhà?",
        answer: "Phần lớn bộ sạc Level 2 cần mạch 240V riêng, tương tự máy sấy quần áo điện. Kỹ thuật viên được chứng nhận sẽ tính toán tải tủ điện trước khi lắp."
      }
    ]
  },
  {
    id: '5',
    title: "Vận hành và bảo trì",
    subtitle: "Giám sát chủ động, kiểm tra nhiệt và tối ưu sản lượng",
    description: "Vệ sinh tấm pin, kiểm tra bằng ảnh nhiệt, đánh giá biến tần và tối ưu hệ thống dây điện.",
    fullDescription: "Bụi, phấn hoa, tác động nhiệt và suy giảm thiết bị điện có thể làm sản lượng giảm tới 25% theo thời gian. Bống Media cung cấp giám sát từ xa 24/7, cảnh báo cảm biến tự động, vệ sinh bằng robot, chụp ảnh nhiệt bằng drone và bảo trì phòng ngừa để tối ưu sản lượng.",
    image: serviceE,
    bannerImage: serviceLargeB,
    features: [
      "Giám sát hiệu suất từ xa 24/7 bằng AI",
      "Ảnh nhiệt hồng ngoại phát hiện điểm nóng",
      "Vệ sinh tấm pin và loại bỏ bụi bằng nước khử ion",
      "Cập nhật phần mềm biến tần và kiểm tra hiệu chuẩn",
      "Điều phối xử lý khẩn cấp nhanh (<4 giờ)"
    ],
    benefits: [
      {
        title: "Tối đa hóa sản lượng điện",
        description: "Vệ sinh định kỳ và điều chỉnh nhiệt giúp khôi phục 100% hiệu suất chuyển đổi tối ưu của tấm pin theo thiết kế nhà máy."
      },
      {
        title: "Ngăn ngừa hỏng hóc tốn kém",
        description: "Phát hiện dây điện xuống cấp, lỗi biến tần và vết nứt nhỏ trước khi chúng gây ra chi phí sửa chữa lớn."
      },
      {
        title: "Duy trì khả năng phát điện",
        description: "Thỏa thuận mức dịch vụ (SLA) giúp hệ điện mặt trời dân dụng và thương mại duy trì thời gian hoạt động cao."
      }
    ],
    specifications: [
      { label: "Cam kết giám sát", value: "Phát hiện lỗi tự động 24/7" },
      { label: "Công nghệ kiểm tra", value: "Drone ảnh nhiệt FLIR và đo đường cong I-V" },
      { label: "Thời gian phản hồi", value: "Điều phối xử lý khẩn cấp tại chỗ trong < 4 giờ" },
      { label: "Phương pháp vệ sinh", value: "Nước tinh khiết khử ion và chổi mềm" }
    ],
    faqs: [
      {
        question: "Nên vệ sinh tấm pin chuyên nghiệp bao lâu một lần?",
        answer: "Chúng tôi khuyến nghị vệ sinh chuyên nghiệp 1–2 lần mỗi năm, hoặc mỗi quý nếu công trình gần đường nhiều bụi, vùng nông nghiệp hay khu ven biển."
      },
      {
        question: "Kiểm tra ảnh nhiệt là gì?",
        answer: "Kiểm tra ảnh nhiệt dùng camera hồng ngoại để phát hiện điểm nóng do điện trở trong tế bào quang điện và hộp nối trước khi thiết bị hỏng."
      }
    ]
  },
  {
    id: '6',
    title: "Hệ điện mặt trời độc lập",
    subtitle: "Hệ năng lượng tự chủ 100% cho nhà vùng xa, trang trại và lưới điện nhỏ",
    description: "Duy trì nguồn điện ổn định 24/7 với hệ pin lưu trữ treo tường công nghệ cao. Chủ động sử dụng năng lượng theo nhu cầu.",
    fullDescription: "Khi điện lưới chưa tới hoặc chi phí đấu nối quá cao, hệ điện mặt trời độc lập Bống Media mang lại khả năng tự chủ hoàn toàn. Giải pháp kết hợp tấm pin công suất lớn, bộ điều khiển sạc MPPT, pin LFP công nghiệp và máy phát điện dự phòng tự khởi động.",
    image: serviceF,
    bannerImage: serviceCover,
    features: [
      "Biến tần độc lập công suất lớn, sóng sin chuẩn",
      "Bộ điều khiển sạc điện mặt trời MPPT cao áp",
      "Bộ pin công nghiệp dung lượng lớn, có thể mở rộng",
      "Tích hợp tự khởi động máy phát điện dự phòng",
      "Giá đỡ bền chắc cho thời tiết và nhiệt độ khắc nghiệt"
    ],
    benefits: [
      {
        title: "Loại bỏ chi phí đấu nối lưới điện",
        description: "Tránh chi phí hàng chục nghìn đô la để kéo cột điện đến công trình vùng xa."
      },
      {
        title: "Tự chủ năng lượng 100%",
        description: "Tự tạo, lưu trữ và sử dụng 100% điện năng mà không có hóa đơn điện hay phụ thuộc vào lưới điện trung tâm."
      },
      {
        title: "Vận hành bền bỉ tại vùng xa",
        description: "Thiết kế dành cho trang trại, nhà trên núi, đảo và trạm viễn thông xa khu dân cư."
      }
    ],
    specifications: [
      { label: "Đầu ra biến tần", value: "5 kW – 50 kW, sóng sin chuẩn" },
      { label: "Bộ điều khiển sạc", value: "MPPT hiệu suất cao, bám điểm 99.5%" },
      { label: "Pin dự phòng", value: "LFP độc lập 20 kWh – hơn 300 kWh" },
      { label: "Máy phát điện dự phòng", value: "Cổng rơ-le tự khởi động tích hợp" }
    ],
    faqs: [
      {
        question: "Hệ độc lập có chạy được điều hòa và máy bơm nước không?",
        answer: "Có. Hệ thống được thiết kế theo tải với biến tần chịu công suất khởi động cao, phù hợp máy bơm giếng sâu và thiết bị điều hòa."
      },
      {
        question: "Điều gì xảy ra khi mưa mùa đông kéo dài hoặc có bão tuyết?",
        answer: "Hệ độc lập có mô-đun tự khởi động máy phát điện. Khi sản lượng thấp và điện áp pin giảm, máy phát tự chạy để sạc pin rồi dừng khi pin đầy."
      }
    ]
  }
];
