// ===== office03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple for workplace facts",
    "formula": "S + V(s/es) + complement",
    "desc": "Dùng hiện tại đơn để mô tả sự thật và lợi ích tại nơi làm việc.",
    "example": "A safe workplace protects employees and helps everyone feel comfortable every day.",
    "vi": "Một nơi làm việc an toàn bảo vệ nhân viên và giúp mọi người cảm thấy thoải mái mỗi ngày.",
    "extra": [
      {
        "en": "Safety rules protect office workers.",
        "vi": "Quy tắc an toàn bảo vệ nhân viên văn phòng."
      },
      {
        "en": "Good technology supports daily office work.",
        "vi": "Công nghệ tốt hỗ trợ công việc văn phòng hằng ngày."
      }
    ]
  },
  {
    "title": "2. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên hoặc quy tắc nên thực hiện.",
    "example": "Employees should know fire safety procedures and emergency exits.",
    "vi": "Nhân viên nên biết các quy trình an toàn phòng cháy và lối thoát hiểm.",
    "extra": [
      {
        "en": "Workers should report broken equipment immediately.",
        "vi": "Nhân viên nên báo cáo thiết bị hỏng ngay lập tức."
      },
      {
        "en": "People should follow office security rules.",
        "vi": "Mọi người nên tuân theo các quy tắc bảo mật văn phòng."
      }
    ]
  },
  {
    "title": "3. Must + bare infinitive",
    "formula": "S + must + V",
    "desc": "Dùng must để diễn tả yêu cầu bắt buộc.",
    "example": "They must use office equipment correctly and report broken machines immediately.",
    "vi": "Họ phải sử dụng thiết bị văn phòng đúng cách và báo cáo máy móc bị hỏng ngay lập tức.",
    "extra": [
      {
        "en": "Employees must keep emergency exits clear.",
        "vi": "Nhân viên phải giữ lối thoát hiểm thông thoáng."
      },
      {
        "en": "Workers must use machines safely.",
        "vi": "Nhân viên phải sử dụng máy móc an toàn."
      }
    ]
  },
  {
    "title": "4. Gerund phrase as subject",
    "formula": "V-ing phrase + singular verb",
    "desc": "Dùng cụm V-ing làm chủ ngữ của câu.",
    "example": "Keeping desks clean and removing dangerous objects helps prevent injuries and unnecessary workplace problems always.",
    "vi": "Giữ bàn làm việc sạch sẽ và loại bỏ các vật nguy hiểm giúp ngăn ngừa chấn thương và những vấn đề không cần thiết tại nơi làm việc.",
    "extra": [
      {
        "en": "Learning new technology improves office skills.",
        "vi": "Học công nghệ mới cải thiện kỹ năng văn phòng."
      },
      {
        "en": "Solving problems together builds confidence.",
        "vi": "Giải quyết vấn đề cùng nhau xây dựng sự tự tin."
      }
    ]
  },
  {
    "title": "5. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu để nói tác dụng hỗ trợ.",
    "example": "Computers, smartphones, and software help employees organize information, communicate easily, and finish important tasks with greater accuracy and efficiency every single day.",
    "vi": "Máy tính, điện thoại thông minh và phần mềm giúp nhân viên sắp xếp thông tin, giao tiếp dễ dàng và hoàn thành nhiệm vụ quan trọng với độ chính xác và hiệu quả cao hơn mỗi ngày.",
    "extra": [
      {
        "en": "Digital tools help teams share files quickly.",
        "vi": "Công cụ kỹ thuật số giúp các nhóm chia sẻ tệp nhanh chóng."
      },
      {
        "en": "Clear rules help workers stay safe.",
        "vi": "Quy tắc rõ ràng giúp nhân viên giữ an toàn."
      }
    ]
  },
  {
    "title": "6. Allow + object + to-infinitive",
    "formula": "S + allow(s) + O + to + V",
    "desc": "Dùng allow + tân ngữ + to-infinitive để nói cho phép ai làm gì.",
    "example": "Technology saves time and allows people to work with coworkers in different places.",
    "vi": "Công nghệ tiết kiệm thời gian và cho phép mọi người làm việc với đồng nghiệp ở những nơi khác nhau.",
    "extra": [
      {
        "en": "Online tools allow employees to work remotely.",
        "vi": "Công cụ trực tuyến cho phép nhân viên làm việc từ xa."
      },
      {
        "en": "Software allows teams to organize information easily.",
        "vi": "Phần mềm cho phép các nhóm sắp xếp thông tin dễ dàng."
      }
    ]
  },
  {
    "title": "7. But for contrast",
    "formula": "Clause + but + clause",
    "desc": "Dùng but để nối hai ý tương phản.",
    "example": "Problems sometimes happen in every workplace, but good teamwork helps solve them.",
    "vi": "Đôi khi vấn đề xảy ra ở mọi nơi làm việc, nhưng tinh thần làm việc nhóm tốt giúp giải quyết chúng.",
    "extra": [
      {
        "en": "The task is difficult, but the team stays positive.",
        "vi": "Nhiệm vụ khó, nhưng cả nhóm vẫn tích cực."
      },
      {
        "en": "Technology is useful, but workers must follow security rules.",
        "vi": "Công nghệ hữu ích, nhưng nhân viên phải tuân theo quy tắc bảo mật."
      }
    ]
  },
  {
    "title": "8. Before + V-ing",
    "formula": "before + V-ing / before + noun phrase",
    "desc": "Dùng before để nói một hành động xảy ra trước hành động khác.",
    "example": "Managers listen to different opinions before making decisions.",
    "vi": "Các quản lý lắng nghe những ý kiến khác nhau trước khi đưa ra quyết định.",
    "extra": [
      {
        "en": "Workers check files before sending them.",
        "vi": "Nhân viên kiểm tra tệp trước khi gửi."
      },
      {
        "en": "Managers listen carefully before choosing a solution.",
        "vi": "Quản lý lắng nghe cẩn thận trước khi chọn giải pháp."
      }
    ]
  },
  {
    "title": "9. Whenever + clause",
    "formula": "S + V + whenever + S + V",
    "desc": "Dùng whenever để nói một hành động xảy ra bất cứ khi nào điều kiện xuất hiện.",
    "example": "People enjoy working together and support each other whenever help is needed.",
    "vi": "Mọi người thích làm việc cùng nhau và hỗ trợ nhau bất cứ khi nào cần giúp đỡ.",
    "extra": [
      {
        "en": "Coworkers offer advice whenever someone needs help.",
        "vi": "Đồng nghiệp đưa ra lời khuyên bất cứ khi nào ai đó cần giúp đỡ."
      },
      {
        "en": "Employees report problems whenever equipment breaks.",
        "vi": "Nhân viên báo cáo sự cố bất cứ khi nào thiết bị bị hỏng."
      }
    ]
  },
  {
    "title": "10. Both A and B",
    "formula": "both + noun A + and + noun B",
    "desc": "Dùng both A and B để nhấn mạnh hai đối tượng cùng được đề cập.",
    "example": "A positive workplace benefits both employees and the company.",
    "vi": "Một nơi làm việc tích cực mang lại lợi ích cho cả nhân viên và công ty.",
    "extra": [
      {
        "en": "Good communication helps both managers and workers.",
        "vi": "Giao tiếp tốt giúp cả quản lý và nhân viên."
      },
      {
        "en": "Technology supports both teamwork and productivity.",
        "vi": "Công nghệ hỗ trợ cả tinh thần làm việc nhóm và năng suất."
      }
    ]
  }
];
