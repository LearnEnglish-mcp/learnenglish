// ===== money02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Gerund as subject",
    "formula": "V-ing + object + verb",
    "desc": "Dùng V-ing làm chủ ngữ để nói về một hoạt động.",
    "example": "Making a budget can help people understand where their money goes every month.",
    "vi": "Lập ngân sách có thể giúp mọi người hiểu tiền của họ đi đâu mỗi tháng.",
    "extra": [
      {
        "en": "Planning expenses helps families control spending.",
        "vi": "Lập kế hoạch chi phí giúp các gia đình kiểm soát việc chi tiêu."
      },
      {
        "en": "Comparing prices helps shoppers make better choices.",
        "vi": "So sánh giá giúp người mua sắm đưa ra lựa chọn tốt hơn."
      }
    ]
  },
  {
    "title": "2. How much + noun",
    "formula": "how much + uncountable noun + clause",
    "desc": "Dùng how much để hỏi hoặc nói về số lượng của danh từ không đếm được.",
    "example": "It shows how much money a person earns, spends, and saves.",
    "vi": "Nó cho biết một người kiếm được, chi tiêu và tiết kiệm bao nhiêu tiền.",
    "extra": [
      {
        "en": "A budget shows how much money is available.",
        "vi": "Ngân sách cho biết có bao nhiêu tiền sẵn có."
      },
      {
        "en": "Shoppers consider how much money they can afford.",
        "vi": "Người mua sắm cân nhắc họ có thể chi trả bao nhiêu tiền."
      }
    ]
  },
  {
    "title": "3. Imperative for instructions",
    "formula": "Base verb + object",
    "desc": "Dùng động từ nguyên mẫu đầu câu để đưa ra hướng dẫn.",
    "example": "First, write down all sources of income.",
    "vi": "Trước tiên, hãy viết ra tất cả các nguồn thu nhập.",
    "extra": [
      {
        "en": "List your necessary expenses before entertainment.",
        "vi": "Hãy liệt kê các khoản chi cần thiết trước chi phí giải trí."
      },
      {
        "en": "Check prices before choosing a product.",
        "vi": "Hãy kiểm tra giá trước khi chọn một sản phẩm."
      }
    ]
  },
  {
    "title": "4. Can be + past participle",
    "formula": "S + can be + V3",
    "desc": "Dùng can be + V3 cho khả năng ở thể bị động.",
    "example": "After that, decide how much money can be saved and how much can be used for entertainment.",
    "vi": "Sau đó, quyết định có thể tiết kiệm bao nhiêu tiền và có thể dùng bao nhiêu cho giải trí.",
    "extra": [
      {
        "en": "Some income can be saved each month.",
        "vi": "Một phần thu nhập có thể được tiết kiệm mỗi tháng."
      },
      {
        "en": "A small amount can be used for fun.",
        "vi": "Một khoản nhỏ có thể được dùng cho giải trí."
      }
    ]
  },
  {
    "title": "5. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "People should check their budget regularly and change it when their income or expenses are different.",
    "vi": "Mọi người nên kiểm tra ngân sách thường xuyên và thay đổi khi thu nhập hoặc chi phí của họ thay đổi.",
    "extra": [
      {
        "en": "People should pay for needs first.",
        "vi": "Mọi người nên chi trả cho nhu cầu trước."
      },
      {
        "en": "Shoppers should compare prices carefully.",
        "vi": "Người mua sắm nên so sánh giá cẩn thận."
      }
    ]
  },
  {
    "title": "6. Relative clause with that",
    "formula": "Noun + that + verb",
    "desc": "Dùng that để bổ nghĩa cho danh từ.",
    "example": "Needs are things that are necessary for a healthy and safe life.",
    "vi": "Nhu cầu là những thứ cần thiết cho một cuộc sống khỏe mạnh và an toàn.",
    "extra": [
      {
        "en": "Choose products that meet real needs.",
        "vi": "Hãy chọn những sản phẩm đáp ứng nhu cầu thực sự."
      },
      {
        "en": "Avoid items that are not necessary.",
        "vi": "Hãy tránh những món hàng không cần thiết."
      }
    ]
  },
  {
    "title": "7. Would like to + verb",
    "formula": "S + would like to + V",
    "desc": "Dùng would like to để nói mong muốn một cách lịch sự hoặc trung tính.",
    "example": "Wants are things that we would like to have but can live without.",
    "vi": "Mong muốn là những thứ chúng ta muốn có nhưng vẫn có thể sống mà không có chúng.",
    "extra": [
      {
        "en": "Many people would like to save more money.",
        "vi": "Nhiều người muốn tiết kiệm nhiều tiền hơn."
      },
      {
        "en": "Shoppers would like to find reasonable prices.",
        "vi": "Người mua sắm muốn tìm mức giá hợp lý."
      }
    ]
  },
  {
    "title": "8. Before + gerund",
    "formula": "Before + V-ing + object, clause",
    "desc": "Dùng before + V-ing để nói hành động xảy ra trước hành động khác.",
    "example": "Before buying something, we should stop and think carefully.",
    "vi": "Trước khi mua một thứ gì đó, chúng ta nên dừng lại và suy nghĩ cẩn thận.",
    "extra": [
      {
        "en": "Before shopping, make a clear list.",
        "vi": "Trước khi mua sắm, hãy lập một danh sách rõ ràng."
      },
      {
        "en": "Before paying, check the price and quality.",
        "vi": "Trước khi thanh toán, hãy kiểm tra giá và chất lượng."
      }
    ]
  },
  {
    "title": "9. If-clause",
    "formula": "If + present simple, clause",
    "desc": "Dùng if để nêu điều kiện.",
    "example": "A cheaper item is not always better if it breaks quickly or cannot be used for long.",
    "vi": "Một món hàng rẻ hơn không phải lúc nào cũng tốt hơn nếu nó nhanh hỏng hoặc không thể dùng lâu.",
    "extra": [
      {
        "en": "A discount is useful if the product is needed.",
        "vi": "Giảm giá hữu ích nếu sản phẩm đó thực sự cần thiết."
      },
      {
        "en": "A budget works well if people review it regularly.",
        "vi": "Ngân sách hoạt động tốt nếu mọi người xem lại thường xuyên."
      }
    ]
  },
  {
    "title": "10. Because + clause",
    "formula": "Clause + because + clause",
    "desc": "Dùng because để nêu lý do.",
    "example": "Sometimes people buy more because they see a discount.",
    "vi": "Đôi khi mọi người mua nhiều hơn vì họ thấy có giảm giá.",
    "extra": [
      {
        "en": "People compare shops because prices can differ.",
        "vi": "Mọi người so sánh các cửa hàng vì giá có thể khác nhau."
      },
      {
        "en": "Smart shoppers wait because they want a good choice.",
        "vi": "Người mua sắm thông minh chờ đợi vì họ muốn có lựa chọn tốt."
      }
    ]
  }
];
