import type { StaticImageData } from "next/image";
import projectA from "@/images/project-a.jpg";
import projectB from "@/images/project-b.jpg";
import projectC from "@/images/project-c.jpg";
import projectD from "@/images/project-d.jpg";
import projectE from "@/images/project-e.jpg";
import projectF from "@/images/project-f.jpg";
import projectG from "@/images/project-g.jpg";
import projectH from "@/images/project-h.jpg";
import projectI from "@/images/project-i.jpg";
import projectJ from "@/images/project-j.jpg";

import projectDetailMain from "@/images/service-large-a.jpg";
import gallery1 from "@/images/story-a.jpg";
import gallery2 from "@/images/story-b.jpg";
import gallery3 from "@/images/story-c.jpg";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  location: string;
  image: StaticImageData;
  detailImage: StaticImageData;
  stats: ProjectStat[];
  category: string;
  address: string;
  capacity: string;
  completion: string;
  description: string;
  benefitsDescription: string;
  challengeDescription: string;
  features: ProjectFeature[];
  galleryImages: StaticImageData[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "meridian-solar-array",
    title: "Meridian Solar Array",
    tag: "TRANG TRẠI ĐIỆN MẶT TRỜI",
    location: "Khu vực Atacama, Chile",
    image: projectA,
    detailImage: projectDetailMain,
    stats: [
      { label: "CÔNG SUẤT", value: "140 MW" },
      { label: "HỘ GIA ĐÌNH ĐƯỢC CẤP ĐIỆN", value: "62K" },
      { label: "CO2 / NĂM", value: "98K t" },
    ],
    category: "Điện mặt trời",
    address: "258 Street, California, Hoa Kỳ",
    capacity: "140 MW",
    completion: "Tháng 3 năm 2025",
    description:
      "Khu vực Sun Valley đối mặt với nhu cầu điện tăng và lưới cũ không đáp ứng tải cao điểm mùa hè nếu thiếu nhà máy nhiên liệu hóa thạch đắt đỏ. Bống Media thiết kế và triển khai hệ thống điện mặt trời 140 MW kết hợp lưu trữ quy mô lưới, thay điện nhập bằng năng lượng sạch tại chỗ có thể điều phối. Sau mười tám tháng khởi công, công trình cung cấp điện cho hơn 62,000 hộ gia đình, giảm phát thải và ổn định giá điện. Tấm pin hai mặt hiệu suất cao cùng giá đỡ bám nắng thông minh giúp tối ưu năng lượng thu nhận quanh năm.",
    benefitsDescription:
      "Công trình điện mặt trời và lưu trữ quy mô lớn cung cấp năng lượng sạch tại chỗ, có thể điều phối cho hàng chục nghìn hộ. Đội ngũ chuyên gia tư vấn giúp lựa chọn phương án năng lượng tái tạo phù hợp với công trình.",
    challengeDescription:
      "Chúng tôi giúp doanh nghiệp phát triển trong thị trường luôn thay đổi bằng các giải pháp thiết thực. Thách thức kỹ thuật chính là cấu hình hệ thống bám nắng ở độ cao lớn để chịu gió mạnh sa mạc và duy trì độ tin cậy vận hành 99.8%.",
    features: [
      {
        title: "Tấm pin quang điện hiệu suất cao",
        description: "Tấm pin đơn tinh thể hai mặt có hiệu suất 22.8%, được thiết kế để duy trì sản lượng ổn định trong hơn 20 năm.",
      },
      {
        title: "Giám sát theo thời gian thực",
        description: "14,200 cảm biến truyền dữ liệu trực tiếp; AI tự động phát hiện suy giảm hiệu suất.",
      },
      {
        title: "Tối ưu lưới điện",
        description: "Phần mềm cân bằng tải điều phối điện linh hoạt giữa 3,600 nút phân phối.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "northwind-coastal-park",
    title: "Northwind Coastal Park",
    tag: "CÔNG VIÊN ĐIỆN GIÓ",
    location: "Jylland, Đan Mạch",
    image: projectB,
    detailImage: projectB,
    stats: [
      { label: "CÔNG SUẤT", value: "95 MW" },
      { label: "HỘ GIA ĐÌNH ĐƯỢC CẤP ĐIỆN", value: "41K" },
      { label: "CO2 / NĂM", value: "70K t" },
    ],
    category: "Điện gió",
    address: "Coastal Way 42, Jylland, Đan Mạch",
    capacity: "95 MW",
    completion: "Tháng 11 năm 2024",
    description:
      "Northwind Coastal Park tích hợp 28 tuabin tiêu chuẩn ngoài khơi để khai thác gió mạnh từ Biển Bắc. Điện sạch được đưa trực tiếp lên lưới quốc gia, cung cấp cho hơn 41,000 hộ mỗi ngày. Công nghệ điều chỉnh góc cánh thông minh và chống đóng băng giúp duy trì hiệu suất trong mùa đông khắc nghiệt.",
    benefitsDescription:
      "Khai thác gió biển để cung cấp điện xanh liên tục với lượng phát thải vận hành gần bằng không, đồng thời ổn định phân phối điện ven biển vào mùa sưởi cao điểm.",
    challengeDescription:
      "Lắp cáp điện dưới biển qua khu bảo tồn sinh thái đòi hỏi công nghệ đào rãnh chuyên dụng để hạn chế ảnh hưởng đến hệ sinh thái.",
    features: [
      {
        title: "Công nghệ tuabin ngoài khơi",
        description: "Máy phát nam châm vĩnh cửu truyền động trực tiếp, chủ động điều chỉnh hướng theo gió ven biển.",
      },
      {
        title: "Kết nối cáp dưới biển",
        description: "Cáp điện cao áp bọc giáp dưới nước giảm tổn hao trên các tuyến biển.",
      },
      {
        title: "Bảo trì dự đoán",
        description: "Phân tích rung động dự đoán hao mòn linh kiện trước 60 ngày so với sự cố cơ học tiềm ẩn.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "aria-adaptive-grid",
    title: "Aria Adaptive Grid",
    tag: "LƯỚI ĐIỆN THÔNG MINH",
    location: "Ontario, Canada",
    image: projectC,
    detailImage: projectC,
    stats: [
      { label: "NÚT ĐƯỢC QUẢN LÝ", value: "1.4M" },
      { label: "THỜI GIAN VẬN HÀNH", value: "99.4%" },
      { label: "GIẢM TỔN HAO", value: "31%" },
    ],
    category: "Hạ tầng thông minh",
    address: "Hành lang Bay Street, Ontario, Canada",
    capacity: "1.4M nút",
    completion: "Tháng 1 năm 2025",
    description:
      "Aria Adaptive Grid là lớp lưới điện thông minh kết nối các nguồn gió, mặt trời và pin lưu trữ phân tán trên khắp Ontario. AI cân bằng các nút theo thời gian thực giúp giảm tổn hao phân phối điện 31%.",
    benefitsDescription:
      "Giảm rủi ro quá tải máy biến áp địa phương, ổn định điện áp và tích hợp các hệ thống điện mái nhà phân tán.",
    challengeDescription:
      "Các đợt tăng tải cao điểm vào đêm mùa đông dưới 0 độ của Canada đòi hỏi thuật toán chuyển tải tự động với độ trễ dưới mili giây.",
    features: [
      {
        title: "Chuyển mạch trong tích tắc",
        description: "Rơ le bán dẫn tự động cách ly sự cố mạng trong dưới 15 mili giây.",
      },
      {
        title: "Dự báo tải bằng AI",
        description: "Thuật toán học máy dự báo nhu cầu điện từng khu dân cư trước 48 giờ.",
      },
      {
        title: "Hạ tầng bảo mật mạng",
        description: "Mạng lưới mã hóa đầu cuối bảo vệ hạ tầng điện trọng yếu trước các mối đe dọa mạng.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "solara-residential-district",
    title: "Solara Residential District",
    tag: "ĐÔ THỊ THÔNG MINH",
    location: "Austin, Hoa Kỳ",
    image: projectD,
    detailImage: projectD,
    stats: [
      { label: "MÁI NHÀ", value: "12K" },
      { label: "CÔNG SUẤT", value: "58 MW" },
      { label: "TIẾT KIỆM HẰNG NĂM", value: "$4.1M" },
    ],
    category: "Điện mặt trời và lưới điện nhỏ",
    address: "Khu Bouldin Creek, Austin, TX, Hoa Kỳ",
    capacity: "58 MW",
    completion: "Tháng 8 năm 2024",
    description:
      "Kết nối 12,000 mái nhà dân dụng thành một lưới điện mặt trời nhỏ thống nhất. Solara Residential District cho phép chủ nhà tạo, chia sẻ và bán điện dư trong cộng đồng.",
    benefitsDescription:
      "Giảm mạnh hóa đơn điện từng hộ, đồng thời cung cấp nguồn dự phòng cho toàn khu khi bão gây mất điện.",
    challengeDescription:
      "Điều phối hóa đơn điện hai chiều giữa hàng nghìn chủ nhà độc lập cần phần mềm sổ cái ngang hàng minh bạch.",
    features: [
      {
        title: "Trao đổi năng lượng ngang hàng",
        description: "Phần mềm lưới điện nhỏ cho phép giao dịch năng lượng trực tiếp giữa các bộ pin gia đình.",
      },
      {
        title: "Tích hợp nhà thông minh",
        description: "API tích hợp trực tiếp với bộ điều nhiệt thông minh và bộ sạc xe điện tại nhà.",
      },
      {
        title: "Dự phòng chế độ độc lập",
        description: "Lưới điện nhỏ tự ngắt khỏi lưới chính khi mất điện để tiếp tục cấp điện cho các hộ.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "photon-fusion",
    title: "Photon Fusion",
    tag: "LƯỚI ĐIỆN THÔNG MINH",
    location: "California, Hoa Kỳ",
    image: projectE,
    detailImage: projectE,
    stats: [
      { label: "CÔNG SUẤT", value: "95 MW" },
      { label: "HỘ GIA ĐÌNH ĐƯỢC CẤP ĐIỆN", value: "41K" },
      { label: "CO2 / NĂM", value: "70K t" },
    ],
    category: "Lưu trữ điện mặt trời",
    address: "Trung tâm năng lượng sạch Silicon Valley, CA, Hoa Kỳ",
    capacity: "95 MW",
    completion: "Tháng 12 năm 2024",
    description:
      "Photon Fusion kết hợp các bộ pin lithium sắt phosphate (LFP) dung lượng cao với điện mặt trời mái nhà thương mại tại các khu doanh nghiệp lớn.",
    benefitsDescription:
      "Giảm phí công suất cao điểm thương mại tới 75%, đồng thời đảm bảo cấp điện liên tục cho trung tâm dữ liệu trọng yếu.",
    challengeDescription:
      "Tích hợp hệ thống pin phản ứng cực nhanh mà không làm ngắt thiết bị bảo vệ điện công nghiệp.",
    features: [
      {
        title: "Hệ pin LFP",
        description: "Pin lưu trữ tuổi thọ dài được thiết kế cho hơn 15,000 chu kỳ sạc liên tục.",
      },
      {
        title: "Giảm tải cao điểm",
        description: "Phần mềm tự động giảm phụ phí công suất trong giờ cao điểm buổi chiều.",
      },
      {
        title: "Quản lý nhiệt",
        description: "Vỏ pin làm mát bằng chất lỏng duy trì nhiệt độ vận hành tối ưu khi tải cao.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "solstice-fields",
    title: "Solstice Fields",
    tag: "ĐIỆN MẶT TRỜI",
    location: "Jylland, Đan Mạch",
    image: projectF,
    detailImage: projectF,
    stats: [
      { label: "MÁI NHÀ", value: "12K" },
      { label: "CÔNG SUẤT", value: "58 MW" },
      { label: "TIẾT KIỆM HẰNG NĂM", value: "$4.1M" },
    ],
    category: "Điện mặt trời kết hợp nông nghiệp",
    address: "Meadowlands 14, Jylland, Đan Mạch",
    capacity: "58 MW",
    completion: "Tháng 2 năm 2025",
    description:
      "Solstice Fields là dự án điện mặt trời kết hợp nông nghiệp tiên phong, bố trí tấm pin cao phía trên khu chăn thả và trồng trọt.",
    benefitsDescription:
      "Sử dụng đất cho hai mục đích giúp bảo tồn hoạt động nông nghiệp và tạo điện tái tạo sạch cho lưới điện đô thị khu vực.",
    challengeDescription:
      "Thiết kế giá đỡ cao để thiết bị nông nghiệp lớn có thể đi qua dưới các hàng tấm pin.",
    features: [
      {
        title: "Giá đỡ nâng cao",
        description: "Kết cấu thép chắc chắn với khoảng thông thủy 4.5 mét cho máy kéo hoạt động bên dưới.",
      },
      {
        title: "Điều tiết vi khí hậu",
        description: "Bóng che từ tấm pin giảm bốc hơi ẩm đất 28% trong đợt hạn mùa hè.",
      },
      {
        title: "Sản lượng điện sạch",
        description: "Cung cấp trực tiếp 58 MW điện sạch tới các trạm phân phối khu vực.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "helios-array",
    title: "Helios Energy Hub",
    tag: "TRANG TRẠI ĐIỆN MẶT TRỜI",
    location: "Nevada, Hoa Kỳ",
    image: projectG,
    detailImage: projectG,
    stats: [
      { label: "CÔNG SUẤT", value: "210 MW" },
      { label: "HỘ GIA ĐÌNH ĐƯỢC CẤP ĐIỆN", value: "88K" },
      { label: "CO2 / NĂM", value: "140K t" },
    ],
    category: "Điện mặt trời",
    address: "Tuyến Desert Horizon, NV, Hoa Kỳ",
    capacity: "210 MW",
    completion: "Tháng 4 năm 2025",
    description:
      "Helios Energy Hub là cơ sở điện mặt trời quy mô 210 MW, sử dụng hệ bám nắng một trục để thu nhận ánh sáng tối đa trên sa mạc.",
    benefitsDescription:
      "Cấp điện cho 88,000 hộ và giảm hơn 140,000 tấn khí nhà kính mỗi năm.",
    challengeDescription:
      "Áp dụng lớp phủ kỵ nước chống bụi để duy trì khả năng truyền ánh sáng trong bão cát sa mạc.",
    features: [
      {
        title: "Hệ bám nắng một trục",
        description: "Xoay tự động theo mặt trời giúp tăng sản lượng điện hằng ngày tới 25%.",
      },
      {
        title: "Lớp phủ chống bụi",
        description: "Xử lý kính kỵ nước tự làm sạch giúp giảm 80% lượng nước rửa tấm pin.",
      },
      {
        title: "Truyền tải HVDC",
        description: "Đường dây điện một chiều cao áp truyền tải hiệu quả trên khoảng cách dài tới các đô thị.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "vanguard-grid",
    title: "Vanguard Microgrid",
    tag: "LƯỚI ĐIỆN THÔNG MINH",
    location: "Melbourne, Úc",
    image: projectH,
    detailImage: projectH,
    stats: [
      { label: "NÚT ĐƯỢC QUẢN LÝ", value: "850K" },
      { label: "THỜI GIAN VẬN HÀNH", value: "99.9%" },
      { label: "GIẢM TỔN HAO", value: "35%" },
    ],
    category: "Lưới điện thông minh",
    address: "Trung tâm công nghệ Docklands, Melbourne, VIC",
    capacity: "850K nút",
    completion: "Tháng 5 năm 2025",
    description:
      "Vanguard Microgrid tối ưu chia sẻ năng lượng giữa công nghiệp và nhà ở trong hành lang công nghệ Melbourne.",
    benefitsDescription:
      "Cung cấp khả năng khởi động đen nhanh và đảm bảo thời gian vận hành 99.9% cho các cơ sở thương mại địa phương.",
    challengeDescription:
      "Tích hợp hạ tầng điện cũ với bộ điều khiển IoT biên hiện đại mà không gián đoạn vận hành.",
    features: [
      {
        title: "Bộ điều khiển AI biên",
        description: "Các nút tính toán phân tán quản lý cân bằng điện áp và tần số tại chỗ trong 5ms.",
      },
      {
        title: "Khả năng khởi động đen",
        description: "Khởi động lưới điện độc lập sau sự cố mất điện khu vực.",
      },
      {
        title: "Giá điện linh hoạt",
        description: "Hệ thống giao dịch tự động tối ưu sạc pin khi giá điện bán buôn giảm.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "nordic-wind-array",
    title: "Nordic Offshore Array",
    tag: "CÔNG VIÊN ĐIỆN GIÓ",
    location: "Oslofjord, Na Uy",
    image: projectI,
    detailImage: projectI,
    stats: [
      { label: "CÔNG SUẤT", value: "175 MW" },
      { label: "HỘ GIA ĐÌNH ĐƯỢC CẤP ĐIỆN", value: "72K" },
      { label: "CO2 / NĂM", value: "115K t" },
    ],
    category: "Điện gió",
    address: "Khu ngoài khơi 4, Oslofjord, Na Uy",
    capacity: "175 MW",
    completion: "Tháng 6 năm 2025",
    description:
      "Hệ tuabin gió nổi được triển khai trong vùng nước sâu tại vịnh hẹp, khai thác gió biển mạnh ngoài khơi.",
    benefitsDescription:
      "Tạo 175 MW điện gió sạch, cấp điện cho hơn 72,000 hộ gia đình Bắc Âu.",
    challengeDescription:
      "Neo các nền tuabin nổi ở vùng nước sâu hơn 200 mét và đảm bảo ổn định kết cấu.",
    features: [
      {
        title: "Chân neo căng cho nền nổi",
        description: "Hệ dây neo chìm cố định vững chắc nền tuabin trong vùng nước sâu.",
      },
      {
        title: "Tổ máy tuabin 15MW",
        description: "Cánh quạt khổng lồ quét vùng gió rộng ngoài khơi để tối đa sản lượng năng lượng.",
      },
      {
        title: "Neo thân thiện sinh thái",
        description: "Neo thùng hút giảm xáo trộn đáy biển và ảnh hưởng tới sinh vật biển.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
  {
    id: "zenith-district-grid",
    title: "Zenith Solar District",
    tag: "ĐÔ THỊ THÔNG MINH",
    location: "Tokyo, Nhật Bản",
    image: projectJ,
    detailImage: projectJ,
    stats: [
      { label: "MÁI NHÀ", value: "18K" },
      { label: "CÔNG SUẤT", value: "82 MW" },
      { label: "TIẾT KIỆM HẰNG NĂM", value: "$6.2M" },
    ],
    category: "Lưới điện nhỏ đô thị",
    address: "Khu Odaiba, Tokyo, Nhật Bản",
    capacity: "82 MW",
    completion: "Tháng 7 năm 2025",
    description:
      "Lưới pin mặt trời mái nhà và lưu trữ mật độ cao tích hợp trong nhà cao tầng thương mại và khu dân cư.",
    benefitsDescription:
      "Tiết kiệm $6.2M chi phí năng lượng hằng năm, đồng thời tăng khả năng chống chịu thiên tai đô thị khi có bão.",
    challengeDescription:
      "Điều chỉnh phụ kiện lắp pin để đáp ứng quy chuẩn an toàn công trình chống động đất nghiêm ngặt.",
    features: [
      {
        title: "Giá đỡ chống động đất",
        description: "Phụ kiện giảm chấn chịu được rung lắc động đất cường độ lớn.",
      },
      {
        title: "Mặt dựng kính BIPV",
        description: "Cửa sổ quang điện tích hợp công trình tạo điện sạch trên bề mặt nhà cao tầng.",
      },
      {
        title: "Nguồn điện dự phòng thiên tai",
        description: "Pin dự phòng khẩn cấp riêng cấp điện cho các nơi trú ẩn thiết yếu khi lưới điện mất điện.",
      },
    ],
    galleryImages: [gallery1, gallery2, gallery3],
  },
];
