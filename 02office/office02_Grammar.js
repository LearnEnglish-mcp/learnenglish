// ===== office02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple for facts",
    "formula": "S + V(s/es) + complement",
    "desc": "Dùng hiện tại đơn để mô tả chức năng và hoạt động thường xuyên.",
    "example": "A team meeting helps workers discuss projects and share useful ideas.",
    "vi": "Một cuộc họp nhóm giúp nhân viên thảo luận dự án và chia sẻ ý tưởng hữu ích.",
    "extra": [
      {
        "en": "Good teamwork improves daily work.",
        "vi": "Tinh thần làm việc nhóm tốt cải thiện công việc hằng ngày."
      },
      {
        "en": "Office rules create clear standards.",
        "vi": "Nội quy văn phòng tạo ra các tiêu chuẩn rõ ràng."
      }
    ]
  },
  {
    "title": "2. Or for alternatives",
    "formula": "S + V1 + complement + or + V2 + complement",
    "desc": "Dùng or để đưa ra hai lựa chọn hoặc cách thức thay thế.",
    "example": "Everyone gathers in one room or joins online.",
    "vi": "Mọi người tập trung trong một phòng hoặc tham gia trực tuyến.",
    "extra": [
      {
        "en": "Workers can meet in person or join online.",
        "vi": "Nhân viên có thể họp trực tiếp hoặc tham gia trực tuyến."
      },
      {
        "en": "Employees can ask questions or suggest ideas.",
        "vi": "Nhân viên có thể đặt câu hỏi hoặc đề xuất ý tưởng."
      }
    ]
  },
  {
    "title": "3. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu không to để nói giúp ai làm gì.",
    "example": "Meetings help people understand goals, solve problems, and work together better every single day successfully.",
    "vi": "Các cuộc họp giúp mọi người hiểu mục tiêu, giải quyết vấn đề và làm việc cùng nhau tốt hơn mỗi ngày.",
    "extra": [
      {
        "en": "Clear plans help teams finish tasks.",
        "vi": "Kế hoạch rõ ràng giúp các nhóm hoàn thành nhiệm vụ."
      },
      {
        "en": "Friendly coworkers help employees reduce stress.",
        "vi": "Đồng nghiệp thân thiện giúp nhân viên giảm căng thẳng."
      }
    ]
  },
  {
    "title": "4. During + noun phrase",
    "formula": "During + noun phrase, S + V",
    "desc": "Dùng during với cụm danh từ để nói một việc xảy ra trong một khoảng thời gian hoặc sự kiện.",
    "example": "During the meeting, each person gives opinions and listens carefully.",
    "vi": "Trong cuộc họp, mỗi người đưa ra ý kiến và lắng nghe cẩn thận.",
    "extra": [
      {
        "en": "During busy days, coworkers support one another.",
        "vi": "Trong những ngày bận rộn, đồng nghiệp hỗ trợ lẫn nhau."
      },
      {
        "en": "During meetings, team members listen carefully.",
        "vi": "Trong các cuộc họp, thành viên nhóm lắng nghe cẩn thận."
      }
    ]
  },
  {
    "title": "5. Superlative adjective",
    "formula": "the + superlative adjective + noun",
    "desc": "Dùng tính từ so sánh nhất để chọn điều nổi bật nhất trong một nhóm.",
    "example": "Team members ask questions, suggest improvements, and agree on the best solutions for future work together.",
    "vi": "Các thành viên nhóm đặt câu hỏi, đề xuất cải tiến và thống nhất những giải pháp tốt nhất cho công việc tương lai.",
    "extra": [
      {
        "en": "The best plan gives everyone clear tasks.",
        "vi": "Kế hoạch tốt nhất giao cho mọi người nhiệm vụ rõ ràng."
      },
      {
        "en": "The best teams communicate openly and respectfully.",
        "vi": "Những nhóm tốt nhất giao tiếp cởi mở và tôn trọng."
      }
    ]
  },
  {
    "title": "6. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để diễn tả quy tắc hoặc lời khuyên.",
    "example": "Employees should understand these rules before starting their jobs.",
    "vi": "Nhân viên nên hiểu những quy tắc này trước khi bắt đầu công việc.",
    "extra": [
      {
        "en": "Workers should arrive on time.",
        "vi": "Nhân viên nên đến đúng giờ."
      },
      {
        "en": "Coworkers should respect different opinions.",
        "vi": "Đồng nghiệp nên tôn trọng các ý kiến khác nhau."
      }
    ]
  },
  {
    "title": "7. When + clause",
    "formula": "S + V + when + S + V",
    "desc": "Dùng when để nói một tình huống xảy ra khi điều kiện khác được đáp ứng.",
    "example": "Everyone feels respected and comfortable when people follow the same standards.",
    "vi": "Mọi người cảm thấy được tôn trọng và thoải mái khi cùng tuân theo những tiêu chuẩn giống nhau.",
    "extra": [
      {
        "en": "Work becomes easier when teams communicate clearly.",
        "vi": "Công việc trở nên dễ hơn khi các nhóm giao tiếp rõ ràng."
      },
      {
        "en": "Employees feel happier when coworkers offer support.",
        "vi": "Nhân viên cảm thấy vui hơn khi đồng nghiệp hỗ trợ."
      }
    ]
  },
  {
    "title": "8. Because + reason clause",
    "formula": "Clause + because + clause",
    "desc": "Dùng because để giải thích nguyên nhân.",
    "example": "Working together is important in every office because teamwork brings better results.",
    "vi": "Làm việc cùng nhau rất quan trọng trong mọi văn phòng vì tinh thần đồng đội mang lại kết quả tốt hơn.",
    "extra": [
      {
        "en": "Teams succeed because members support one another.",
        "vi": "Các nhóm thành công vì thành viên hỗ trợ lẫn nhau."
      },
      {
        "en": "Rules matter because they keep work organized.",
        "vi": "Quy tắc quan trọng vì chúng giữ công việc có tổ chức."
      }
    ]
  },
  {
    "title": "9. Gerund phrase as subject",
    "formula": "V-ing phrase + singular verb",
    "desc": "Dùng cụm V-ing làm chủ ngữ để nói về một hoạt động nói chung.",
    "example": "Following office rules creates a friendly environment where everyone can work peacefully together every day.",
    "vi": "Tuân theo nội quy văn phòng tạo ra một môi trường thân thiện, nơi mọi người có thể làm việc yên bình cùng nhau mỗi ngày.",
    "extra": [
      {
        "en": "Following rules creates a peaceful workplace.",
        "vi": "Tuân theo quy tắc tạo ra một nơi làm việc yên bình."
      },
      {
        "en": "Sharing ideas builds stronger teamwork.",
        "vi": "Chia sẻ ý tưởng xây dựng tinh thần làm việc nhóm mạnh hơn."
      }
    ]
  },
  {
    "title": "10. Comparative adjectives and adverbs",
    "formula": "comparative + than / comparative description",
    "desc": "Dùng dạng so sánh hơn để mô tả kết quả được cải thiện.",
    "example": "Good teamwork helps everyone finish tasks faster and creates a positive working environment daily.",
    "vi": "Tinh thần làm việc nhóm tốt giúp mọi người hoàn thành nhiệm vụ nhanh hơn và tạo ra môi trường làm việc tích cực hằng ngày.",
    "extra": [
      {
        "en": "Clear communication makes work easier.",
        "vi": "Giao tiếp rõ ràng làm công việc dễ hơn."
      },
      {
        "en": "Strong teamwork makes employees happier.",
        "vi": "Tinh thần làm việc nhóm mạnh mẽ làm nhân viên vui hơn."
      }
    ]
  }
];
