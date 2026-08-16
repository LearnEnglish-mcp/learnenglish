const newGrammarData = [
  {
    "title": "1. Connected to",
    "formula": "S + be + connected to + noun",
    "desc": "Dùng be connected to để mô tả sự kết nối giữa các cơ quan.",
    "example": "It is connected to the esophagus and the small intestine.",
    "vi": "Dạ dày được nối với thực quản và ruột non.",
    "extra": [
      {
        "en": "The stomach is connected to the small intestine.",
        "vi": "Dạ dày được nối với ruột non."
      },
      {
        "en": "The kidneys are connected to the bladder by ureters.",
        "vi": "Thận được nối với bàng quang bằng niệu quản."
      }
    ]
  },
  {
    "title": "2. Depending on",
    "formula": "S + V + depending on + clause",
    "desc": "Dùng depending on để nói một đặc điểm thay đổi tùy điều kiện.",
    "example": "Its shape changes depending on how much food it contains.",
    "vi": "Hình dạng của dạ dày thay đổi tùy vào lượng thức ăn mà nó chứa.",
    "extra": [
      {
        "en": "Stomach size changes depending on how much we eat.",
        "vi": "Kích thước dạ dày thay đổi tùy lượng chúng ta ăn."
      },
      {
        "en": "Energy use changes depending on daily activity.",
        "vi": "Việc sử dụng năng lượng thay đổi tùy hoạt động hằng ngày."
      }
    ]
  },
  {
    "title": "3. Coordinated verbs",
    "formula": "S + V + O + and + V + O",
    "desc": "Dùng hai động từ song song để mô tả hai chức năng.",
    "example": "The stomach stores food and mixes it with digestive juices.",
    "vi": "Dạ dày chứa thức ăn và trộn thức ăn với dịch tiêu hóa.",
    "extra": [
      {
        "en": "The liver stores energy and removes harmful substances.",
        "vi": "Gan dự trữ năng lượng và loại bỏ chất có hại."
      },
      {
        "en": "The kidneys clean blood and remove waste.",
        "vi": "Thận làm sạch máu và loại bỏ chất thải."
      }
    ]
  },
  {
    "title": "4. Before + V-ing",
    "formula": "S + V + O + before + V-ing",
    "desc": "Dùng before + V-ing để nói một hành động xảy ra trước hành động khác.",
    "example": "The stomach muscles move the food before sending it to the small intestine for further digestion.",
    "vi": "Các cơ dạ dày di chuyển thức ăn trước khi đưa nó đến ruột non để tiếp tục tiêu hóa.",
    "extra": [
      {
        "en": "Chew food well before sending it to the stomach.",
        "vi": "Hãy nhai kỹ trước khi đưa thức ăn xuống dạ dày."
      },
      {
        "en": "Rest briefly before exercising after a large meal.",
        "vi": "Hãy nghỉ ngắn trước khi tập thể dục sau bữa ăn lớn."
      }
    ]
  },
  {
    "title": "5. Comparative with better than",
    "formula": "A + be + better than + B",
    "desc": "Dùng better than để so sánh hai thói quen.",
    "example": "Regular meals are better than eating too much at once.",
    "vi": "Các bữa ăn đều đặn tốt hơn việc ăn quá nhiều cùng một lúc.",
    "extra": [
      {
        "en": "Regular meals are better than very large meals.",
        "vi": "Các bữa đều đặn tốt hơn những bữa quá lớn."
      },
      {
        "en": "Clean food is better than unsafe food.",
        "vi": "Thực phẩm sạch tốt hơn thực phẩm không an toàn."
      }
    ]
  },
  {
    "title": "6. Can + bare infinitive",
    "formula": "S + can + V + O",
    "desc": "Dùng can để nói tác dụng có thể có.",
    "example": "Clean food, enough water, and less oily or spicy food can prevent discomfort.",
    "vi": "Thực phẩm sạch, đủ nước và ít thức ăn nhiều dầu hoặc cay có thể ngăn cảm giác khó chịu.",
    "extra": [
      {
        "en": "Water can prevent some digestive discomfort.",
        "vi": "Nước có thể ngăn một số khó chịu tiêu hóa."
      },
      {
        "en": "Exercise can support healthy liver function.",
        "vi": "Tập thể dục có thể hỗ trợ chức năng gan khỏe mạnh."
      }
    ]
  },
  {
    "title": "7. Relative clause with that",
    "formula": "noun + that + V",
    "desc": "Dùng that để bổ nghĩa cho danh từ.",
    "example": "It produces bile, a liquid that helps the body digest fat.",
    "vi": "Gan tạo ra mật, một chất lỏng giúp cơ thể tiêu hóa chất béo.",
    "extra": [
      {
        "en": "The liver produces bile that helps digest fat.",
        "vi": "Gan tạo mật giúp tiêu hóa chất béo."
      },
      {
        "en": "The kidneys contain filters that clean the blood.",
        "vi": "Thận chứa các bộ lọc làm sạch máu."
      }
    ]
  },
  {
    "title": "8. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên sức khỏe.",
    "example": "To protect the liver, people should eat balanced meals and keep a healthy weight.",
    "vi": "Để bảo vệ gan, mọi người nên ăn các bữa cân bằng và duy trì cân nặng khỏe mạnh.",
    "extra": [
      {
        "en": "People should eat balanced meals every day.",
        "vi": "Mọi người nên ăn các bữa cân bằng mỗi ngày."
      },
      {
        "en": "People should drink enough water for healthy kidneys.",
        "vi": "Mọi người nên uống đủ nước để thận khỏe mạnh."
      }
    ]
  },
  {
    "title": "9. Relative clause with which",
    "formula": "noun, which + V",
    "desc": "Dùng which để thêm thông tin về danh từ đứng trước.",
    "example": "The waste becomes urine, which moves through the ureters to the bladder before leaving the body.",
    "vi": "Chất thải trở thành nước tiểu, đi qua niệu quản đến bàng quang trước khi rời cơ thể.",
    "extra": [
      {
        "en": "Urine enters the bladder, which stores it temporarily.",
        "vi": "Nước tiểu đi vào bàng quang, nơi tạm thời chứa nó."
      },
      {
        "en": "The liver produces bile, which supports fat digestion.",
        "vi": "Gan tạo mật, chất hỗ trợ tiêu hóa chất béo."
      }
    ]
  },
  {
    "title": "10. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "People should not take medicine carelessly because some drugs may damage the kidneys.",
    "vi": "Mọi người không nên dùng thuốc bất cẩn vì một số loại thuốc có thể làm tổn thương thận.",
    "extra": [
      {
        "en": "Avoid careless medicine use because some drugs cause damage.",
        "vi": "Tránh dùng thuốc bất cẩn vì một số thuốc gây tổn thương."
      },
      {
        "en": "Drink enough water because the kidneys need it.",
        "vi": "Uống đủ nước vì thận cần nước."
      }
    ]
  }
];
