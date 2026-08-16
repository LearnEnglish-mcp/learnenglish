// ===== office01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple for routines",
    "formula": "S + V(s/es) + complement",
    "desc": "Dùng hiện tại đơn để nói về công việc và thói quen thường xuyên trong văn phòng.",
    "example": "Many people work in a modern office every day.",
    "vi": "Nhiều người làm việc trong một văn phòng hiện đại mỗi ngày.",
    "extra": [
      {
        "en": "Office workers check emails every morning.",
        "vi": "Nhân viên văn phòng kiểm tra email mỗi sáng."
      },
      {
        "en": "The manager reviews reports every afternoon.",
        "vi": "Người quản lý xem lại báo cáo mỗi chiều."
      }
    ]
  },
  {
    "title": "2. Have/has + noun",
    "formula": "S + have/has + O",
    "desc": "Dùng have/has để nói một người hoặc nơi có, sở hữu hoặc đảm nhiệm điều gì.",
    "example": "The office has many desks, computers, and bright lights.",
    "vi": "Văn phòng có nhiều bàn làm việc, máy tính và đèn sáng.",
    "extra": [
      {
        "en": "Our office has two meeting rooms.",
        "vi": "Văn phòng của chúng tôi có hai phòng họp."
      },
      {
        "en": "Each worker has a clear daily schedule.",
        "vi": "Mỗi nhân viên có một lịch trình hằng ngày rõ ràng."
      }
    ]
  },
  {
    "title": "3. Coordinated verbs with and",
    "formula": "S + V1 + complement, V2 + complement, and V3 + complement",
    "desc": "Dùng and để nối các hành động cùng chung một chủ ngữ.",
    "example": "Workers arrive early, greet each other, and start their tasks.",
    "vi": "Nhân viên đến sớm, chào nhau và bắt đầu công việc.",
    "extra": [
      {
        "en": "Employees read emails and prepare documents.",
        "vi": "Nhân viên đọc email và chuẩn bị tài liệu."
      },
      {
        "en": "The secretary answers calls and arranges meetings.",
        "vi": "Thư ký trả lời điện thoại và sắp xếp các cuộc họp."
      }
    ]
  },
  {
    "title": "4. While + contrasting clause",
    "formula": "Clause, while + clause",
    "desc": "Dùng while để nối hai hành động hoặc hai nhóm hoạt động khác nhau diễn ra song song.",
    "example": "Some talk with customers, while others prepare documents.",
    "vi": "Một số người nói chuyện với khách hàng, trong khi những người khác chuẩn bị tài liệu.",
    "extra": [
      {
        "en": "Some employees write reports while others answer calls.",
        "vi": "Một số nhân viên viết báo cáo trong khi những người khác trả lời điện thoại."
      },
      {
        "en": "The manager speaks while the team listens.",
        "vi": "Người quản lý nói trong khi cả nhóm lắng nghe."
      }
    ]
  },
  {
    "title": "5. When + past participle/adjective",
    "formula": "S + V + when + complement",
    "desc": "Dùng when để nói thời điểm hoặc điều kiện một hành động xảy ra.",
    "example": "They help each other when needed.",
    "vi": "Họ giúp đỡ nhau khi cần.",
    "extra": [
      {
        "en": "Workers ask questions when necessary.",
        "vi": "Nhân viên đặt câu hỏi khi cần thiết."
      },
      {
        "en": "Employees report problems when they appear.",
        "vi": "Nhân viên báo cáo vấn đề khi chúng xuất hiện."
      }
    ]
  },
  {
    "title": "6. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên hoặc điều nên làm.",
    "example": "Workers should use office equipment carefully and follow simple instructions.",
    "vi": "Nhân viên nên sử dụng thiết bị văn phòng cẩn thận và làm theo các hướng dẫn đơn giản.",
    "extra": [
      {
        "en": "Employees should keep their desks clean.",
        "vi": "Nhân viên nên giữ bàn làm việc sạch sẽ."
      },
      {
        "en": "Workers should follow the office schedule.",
        "vi": "Nhân viên nên tuân theo lịch trình văn phòng."
      }
    ]
  },
  {
    "title": "7. Because + reason clause",
    "formula": "Clause + because + clause",
    "desc": "Dùng because để nêu lý do cho một nhận định.",
    "example": "Every office job is important because each person has different responsibilities.",
    "vi": "Mỗi công việc văn phòng đều quan trọng vì mỗi người có những trách nhiệm khác nhau.",
    "extra": [
      {
        "en": "Teamwork matters because people need support.",
        "vi": "Tinh thần làm việc nhóm quan trọng vì mọi người cần sự hỗ trợ."
      },
      {
        "en": "Good equipment helps because it saves time.",
        "vi": "Thiết bị tốt hữu ích vì nó tiết kiệm thời gian."
      }
    ]
  },
  {
    "title": "8. To-infinitive for purpose",
    "formula": "S + V + O + to + V",
    "desc": "Dùng to + động từ nguyên mẫu để diễn tả mục đích.",
    "example": "Employees use different equipment to finish tasks quickly and correctly.",
    "vi": "Nhân viên sử dụng các thiết bị khác nhau để hoàn thành nhiệm vụ nhanh chóng và chính xác.",
    "extra": [
      {
        "en": "Workers use printers to make paper copies.",
        "vi": "Nhân viên dùng máy in để tạo bản sao giấy."
      },
      {
        "en": "Managers plan carefully to improve office work.",
        "vi": "Quản lý lập kế hoạch cẩn thận để cải thiện công việc văn phòng."
      }
    ]
  },
  {
    "title": "9. Gerund phrase as subject",
    "formula": "V-ing phrase + singular verb",
    "desc": "Dùng cụm V-ing làm chủ ngữ của câu.",
    "example": "Keeping machines clean and reporting problems quickly helps prevent damage.",
    "vi": "Giữ máy móc sạch sẽ và báo cáo sự cố nhanh chóng giúp ngăn ngừa hư hỏng.",
    "extra": [
      {
        "en": "Checking equipment regularly prevents problems.",
        "vi": "Kiểm tra thiết bị thường xuyên giúp ngăn ngừa sự cố."
      },
      {
        "en": "Planning daily tasks makes work easier.",
        "vi": "Lập kế hoạch nhiệm vụ hằng ngày làm công việc dễ hơn."
      }
    ]
  },
  {
    "title": "10. Comparative adjectives",
    "formula": "make + O + comparative adjective(s)",
    "desc": "Dùng tính từ so sánh hơn để mô tả sự cải thiện hoặc thay đổi.",
    "example": "Good equipment and careful use make the office safer, faster, and more productive every day.",
    "vi": "Thiết bị tốt và cách sử dụng cẩn thận làm cho văn phòng an toàn hơn, nhanh hơn và hiệu quả hơn mỗi ngày.",
    "extra": [
      {
        "en": "Clear plans make teamwork easier and stronger.",
        "vi": "Kế hoạch rõ ràng làm cho tinh thần làm việc nhóm dễ dàng và mạnh mẽ hơn."
      },
      {
        "en": "Modern tools make office work faster.",
        "vi": "Công cụ hiện đại làm công việc văn phòng nhanh hơn."
      }
    ]
  }
];
