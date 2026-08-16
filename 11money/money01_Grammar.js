// ===== money01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple with use",
    "formula": "S + use(s) + O",
    "desc": "Dùng hiện tại đơn để nói về công dụng hoặc thói quen chung.",
    "example": "Money is something people use to buy goods and services.",
    "vi": "Money is something people use to buy goods and services.",
    "extra": [
      {
        "en": "People use money to pay for daily needs.",
        "vi": "Mọi người dùng tiền để chi trả các nhu cầu hằng ngày."
      },
      {
        "en": "Families use money to plan important expenses.",
        "vi": "Các gia đình dùng tiền để lên kế hoạch cho những khoản chi quan trọng."
      }
    ]
  },
  {
    "title": "2. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc công dụng.",
    "example": "It can be coins, banknotes, or digital money in a bank account.",
    "vi": "Tiền có thể là tiền xu, tiền giấy hoặc tiền kỹ thuật số trong tài khoản ngân hàng.",
    "extra": [
      {
        "en": "Small savings can support future plans.",
        "vi": "Những khoản tiết kiệm nhỏ có thể hỗ trợ các kế hoạch tương lai."
      },
      {
        "en": "Money can make some daily tasks easier.",
        "vi": "Tiền có thể làm một số việc hằng ngày trở nên dễ dàng hơn."
      }
    ]
  },
  {
    "title": "3. Would + bare infinitive",
    "formula": "S + would + V",
    "desc": "Dùng would trong tình huống giả định.",
    "example": "Without money, people would need to exchange goods directly.",
    "vi": "Nếu không có tiền, mọi người sẽ phải trao đổi hàng hóa trực tiếp.",
    "extra": [
      {
        "en": "Without a budget, people would spend less carefully.",
        "vi": "Nếu không có ngân sách, mọi người sẽ chi tiêu kém cẩn thận hơn."
      },
      {
        "en": "Without savings, families would have less protection.",
        "vi": "Nếu không có tiết kiệm, các gia đình sẽ có ít sự bảo vệ hơn."
      }
    ]
  },
  {
    "title": "4. Because + clause",
    "formula": "Clause + because + clause",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "This method could be difficult because both people might not want what the other person has.",
    "vi": "Cách này có thể khó khăn vì cả hai người có thể không muốn thứ mà người kia có.",
    "extra": [
      {
        "en": "Saving is useful because future costs can be unexpected.",
        "vi": "Tiết kiệm hữu ích vì các chi phí tương lai có thể bất ngờ."
      },
      {
        "en": "People compare prices because they want better choices.",
        "vi": "Mọi người so sánh giá vì họ muốn có lựa chọn tốt hơn."
      }
    ]
  },
  {
    "title": "5. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Money is important, but we should use it carefully.",
    "vi": "Tiền quan trọng, nhưng chúng ta nên sử dụng nó cẩn thận.",
    "extra": [
      {
        "en": "People should save a small amount regularly.",
        "vi": "Mọi người nên tiết kiệm một khoản nhỏ thường xuyên."
      },
      {
        "en": "Families should plan important expenses carefully.",
        "vi": "Các gia đình nên lên kế hoạch cẩn thận cho những khoản chi quan trọng."
      }
    ]
  },
  {
    "title": "6. Need to + bare infinitive",
    "formula": "S + need to + V",
    "desc": "Dùng need to để nói điều cần làm.",
    "example": "We need to earn, save, and spend it wisely.",
    "vi": "Chúng ta cần kiếm, tiết kiệm và chi tiêu tiền một cách khôn ngoan.",
    "extra": [
      {
        "en": "People need to separate needs from wants.",
        "vi": "Mọi người cần phân biệt nhu cầu với mong muốn."
      },
      {
        "en": "We need to think before unnecessary shopping.",
        "vi": "Chúng ta cần suy nghĩ trước khi mua sắm không cần thiết."
      }
    ]
  },
  {
    "title": "7. Comparative adjective",
    "formula": "more + adjective",
    "desc": "Dùng dạng so sánh hơn để so sánh trạng thái hoặc mức độ.",
    "example": "Money cannot buy love or true friendship, but it can make daily life easier and more comfortable.",
    "vi": "Tiền không thể mua được tình yêu hay tình bạn chân thật, nhưng nó có thể làm cho cuộc sống hằng ngày dễ dàng và thoải mái hơn.",
    "extra": [
      {
        "en": "A simple budget can make spending more organized.",
        "vi": "Một ngân sách đơn giản có thể làm việc chi tiêu có tổ chức hơn."
      },
      {
        "en": "Regular saving can make future planning easier.",
        "vi": "Tiết kiệm đều đặn có thể làm việc lập kế hoạch tương lai dễ dàng hơn."
      }
    ]
  },
  {
    "title": "8. Such as + examples",
    "formula": "Noun phrase + such as + examples",
    "desc": "Dùng such as để đưa ra ví dụ.",
    "example": "It can also help them prepare for important events, such as studying at university, buying a house, or starting a small business.",
    "vi": "Tiền cũng có thể giúp họ chuẩn bị cho những sự kiện quan trọng, chẳng hạn như học đại học, mua nhà hoặc bắt đầu một công việc kinh doanh nhỏ.",
    "extra": [
      {
        "en": "Families plan for goals such as education and housing.",
        "vi": "Các gia đình lên kế hoạch cho những mục tiêu như giáo dục và nhà ở."
      },
      {
        "en": "People save for costs such as repairs and bills.",
        "vi": "Mọi người tiết kiệm cho các chi phí như sửa chữa và hóa đơn."
      }
    ]
  },
  {
    "title": "9. By + gerund",
    "formula": "S + V + by + V-ing",
    "desc": "Dùng by + V-ing để chỉ cách thực hiện một hành động.",
    "example": "People can save money by bringing lunch from home, turning off unused lights, and avoiding unnecessary shopping.",
    "vi": "Mọi người có thể tiết kiệm tiền bằng cách mang bữa trưa từ nhà, tắt những đèn không sử dụng và tránh mua sắm không cần thiết.",
    "extra": [
      {
        "en": "People save by comparing prices before shopping.",
        "vi": "Mọi người tiết kiệm bằng cách so sánh giá trước khi mua sắm."
      },
      {
        "en": "Families reduce costs by planning meals carefully.",
        "vi": "Các gia đình giảm chi phí bằng cách lên kế hoạch bữa ăn cẩn thận."
      }
    ]
  },
  {
    "title": "10. When + clause",
    "formula": "Clause + when + clause",
    "desc": "Dùng when để nối hành động với thời điểm hoặc tình huống.",
    "example": "It can reduce stress when we need to repair something or pay an urgent bill.",
    "vi": "Nó có thể giảm căng thẳng khi chúng ta cần sửa một thứ gì đó hoặc thanh toán một hóa đơn khẩn cấp.",
    "extra": [
      {
        "en": "Savings help when unexpected costs appear.",
        "vi": "Tiền tiết kiệm giúp ích khi xuất hiện chi phí bất ngờ."
      },
      {
        "en": "People check their plans when expenses change.",
        "vi": "Mọi người kiểm tra kế hoạch khi chi phí thay đổi."
      }
    ]
  }
];
