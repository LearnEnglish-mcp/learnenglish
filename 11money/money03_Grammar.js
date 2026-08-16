// ===== money03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Relative clause with that",
    "formula": "Noun + that + clause",
    "desc": "Dùng that để bổ nghĩa cho danh từ.",
    "example": "Cash includes coins and banknotes that people can hold and use directly.",
    "vi": "Tiền mặt gồm tiền xu và tiền giấy mà mọi người có thể cầm và sử dụng trực tiếp.",
    "extra": [
      {
        "en": "Use payment methods that fit the situation.",
        "vi": "Hãy dùng phương thức thanh toán phù hợp với tình huống."
      },
      {
        "en": "Protect information that belongs to your bank account.",
        "vi": "Hãy bảo vệ thông tin thuộc tài khoản ngân hàng của bạn."
      }
    ]
  },
  {
    "title": "2. Because + clause",
    "formula": "Clause + because + clause",
    "desc": "Dùng because để giải thích lý do.",
    "example": "Bank cards and digital payments are convenient because people do not need to carry much cash.",
    "vi": "Thẻ ngân hàng và thanh toán kỹ thuật số tiện lợi vì mọi người không cần mang nhiều tiền mặt.",
    "extra": [
      {
        "en": "Cards are useful because they reduce the need for cash.",
        "vi": "Thẻ hữu ích vì chúng làm giảm nhu cầu mang tiền mặt."
      },
      {
        "en": "Savings matter because emergencies can happen suddenly.",
        "vi": "Tiền tiết kiệm quan trọng vì tình huống khẩn cấp có thể xảy ra đột ngột."
      }
    ]
  },
  {
    "title": "3. Must + bare infinitive",
    "formula": "S + must + V",
    "desc": "Dùng must để diễn tả yêu cầu mạnh hoặc điều bắt buộc.",
    "example": "However, users must protect their passwords and personal banking information.",
    "vi": "Tuy nhiên, người dùng phải bảo vệ mật khẩu và thông tin ngân hàng cá nhân.",
    "extra": [
      {
        "en": "Users must keep banking information private.",
        "vi": "Người dùng phải giữ thông tin ngân hàng riêng tư."
      },
      {
        "en": "Workers must protect important account details.",
        "vi": "Người lao động phải bảo vệ các chi tiết tài khoản quan trọng."
      }
    ]
  },
  {
    "title": "4. Superlative adjective",
    "formula": "the + superlative adjective",
    "desc": "Dùng so sánh nhất để nói lựa chọn nổi bật nhất trong một nhóm.",
    "example": "People should choose the safest and most suitable method for each situation.",
    "vi": "Mọi người nên chọn phương thức an toàn nhất và phù hợp nhất cho từng tình huống.",
    "extra": [
      {
        "en": "Choose the safest payment option available.",
        "vi": "Hãy chọn lựa chọn thanh toán an toàn nhất hiện có."
      },
      {
        "en": "Use the most suitable method for each purchase.",
        "vi": "Hãy dùng phương thức phù hợp nhất cho từng khoản mua."
      }
    ]
  },
  {
    "title": "5. Depend on",
    "formula": "S + depend(s) on + noun",
    "desc": "Dùng depend on để nói sự phụ thuộc.",
    "example": "The amount of money a person earns often depends on their skills, education, experience, and responsibilities.",
    "vi": "Số tiền một người kiếm được thường phụ thuộc vào kỹ năng, giáo dục, kinh nghiệm và trách nhiệm của họ.",
    "extra": [
      {
        "en": "Income can depend on skills and experience.",
        "vi": "Thu nhập có thể phụ thuộc vào kỹ năng và kinh nghiệm."
      },
      {
        "en": "Opportunities often depend on learning and effort.",
        "vi": "Cơ hội thường phụ thuộc vào việc học và nỗ lực."
      }
    ]
  },
  {
    "title": "6. May + bare infinitive",
    "formula": "S + may + V",
    "desc": "Dùng may để diễn tả khả năng có thể xảy ra.",
    "example": "A person may suddenly become sick, lose a job, or need to repair a motorbike or household item.",
    "vi": "Một người có thể đột nhiên bị bệnh, mất việc hoặc cần sửa xe máy hay đồ dùng trong nhà.",
    "extra": [
      {
        "en": "Unexpected costs may appear without warning.",
        "vi": "Chi phí bất ngờ có thể xuất hiện mà không báo trước."
      },
      {
        "en": "A worker may need emergency savings one day.",
        "vi": "Một người lao động có thể cần tiền tiết kiệm khẩn cấp vào một ngày nào đó."
      }
    ]
  },
  {
    "title": "7. Passive voice",
    "formula": "S + be + V3",
    "desc": "Dùng thể bị động khi nhấn mạnh đối tượng chịu tác động.",
    "example": "The money should be kept in a safe place and used only for real emergencies.",
    "vi": "Tiền nên được giữ ở nơi an toàn và chỉ dùng cho những trường hợp khẩn cấp thực sự.",
    "extra": [
      {
        "en": "Emergency money should be kept safely.",
        "vi": "Tiền khẩn cấp nên được giữ an toàn."
      },
      {
        "en": "Private banking details should be protected carefully.",
        "vi": "Thông tin ngân hàng riêng tư nên được bảo vệ cẩn thận."
      }
    ]
  },
  {
    "title": "8. However as a linker",
    "formula": "However, clause",
    "desc": "Dùng however để nối hai ý tương phản.",
    "example": "However, money alone cannot create a truly happy life.",
    "vi": "Tuy nhiên, chỉ tiền thôi không thể tạo ra một cuộc sống thật sự hạnh phúc.",
    "extra": [
      {
        "en": "However, money cannot replace strong relationships.",
        "vi": "Tuy nhiên, tiền không thể thay thế những mối quan hệ bền chặt."
      },
      {
        "en": "However, a high income does not guarantee happiness.",
        "vi": "Tuy nhiên, thu nhập cao không đảm bảo hạnh phúc."
      }
    ]
  },
  {
    "title": "9. Still + verb",
    "formula": "S + may still + V",
    "desc": "Dùng still để nhấn mạnh điều vẫn có thể đúng.",
    "example": "A rich person may still feel lonely or unhappy.",
    "vi": "Một người giàu vẫn có thể cảm thấy cô đơn hoặc không hạnh phúc.",
    "extra": [
      {
        "en": "A careful saver may still face an emergency.",
        "vi": "Một người tiết kiệm cẩn thận vẫn có thể gặp tình huống khẩn cấp."
      },
      {
        "en": "A successful worker may still need time to relax.",
        "vi": "Một người lao động thành công vẫn có thể cần thời gian thư giãn."
      }
    ]
  },
  {
    "title": "10. When + adjective clause",
    "formula": "Clause + when + adjective",
    "desc": "Dùng when để nói điều xảy ra trong một điều kiện hoặc thời điểm.",
    "example": "People should spend responsibly, save for the future, and help others when possible.",
    "vi": "Mọi người nên chi tiêu có trách nhiệm, tiết kiệm cho tương lai và giúp đỡ người khác khi có thể.",
    "extra": [
      {
        "en": "Help family members when possible.",
        "vi": "Hãy giúp các thành viên gia đình khi có thể."
      },
      {
        "en": "Save a small amount when possible.",
        "vi": "Hãy tiết kiệm một khoản nhỏ khi có thể."
      }
    ]
  }
];
