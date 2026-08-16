// ===== park01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple for descriptions",
    "formula": "S + V(s/es) + complement",
    "desc": "Dùng hiện tại đơn để mô tả đặc điểm, thói quen hoặc sự việc thường xuyên.",
    "example": "A beautiful park is a peaceful place where people relax and enjoy nature.",
    "vi": "Một công viên đẹp là nơi yên bình để mọi người thư giãn và tận hưởng thiên nhiên.",
    "extra": [
      {
        "en": "A quiet park gives families space to relax.",
        "vi": "Một công viên yên tĩnh cho các gia đình không gian để thư giãn."
      },
      {
        "en": "Green trees make public spaces more pleasant.",
        "vi": "Cây xanh làm cho không gian công cộng dễ chịu hơn."
      }
    ]
  },
  {
    "title": "2. Relative clause with where",
    "formula": "Noun + where + S + V",
    "desc": "Dùng where để giới thiệu mệnh đề mô tả một nơi chốn.",
    "example": "Parks are safe places where families, friends, and neighbors spend time together.",
    "vi": "Công viên là nơi an toàn để gia đình, bạn bè và hàng xóm dành thời gian bên nhau.",
    "extra": [
      {
        "en": "This is a park where children can play safely.",
        "vi": "Đây là công viên nơi trẻ em có thể vui chơi an toàn."
      },
      {
        "en": "We like places where families spend time together.",
        "vi": "Chúng tôi thích những nơi gia đình dành thời gian bên nhau."
      }
    ]
  },
  {
    "title": "3. Modal can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can với động từ nguyên mẫu để nói về khả năng hoặc hoạt động có thể thực hiện.",
    "example": "People can walk, jog, ride bicycles, or sit on benches.",
    "vi": "Mọi người có thể đi bộ, chạy bộ, đi xe đạp hoặc ngồi trên ghế băng.",
    "extra": [
      {
        "en": "Visitors can rest on benches near the lake.",
        "vi": "Khách tham quan có thể nghỉ trên ghế băng gần hồ."
      },
      {
        "en": "Children can ride bicycles on safe paths.",
        "vi": "Trẻ em có thể đi xe đạp trên những lối đi an toàn."
      }
    ]
  },
  {
    "title": "4. While + clause",
    "formula": "S + V + while + S + V",
    "desc": "Dùng while để nói hai hành động xảy ra cùng lúc.",
    "example": "Children play on swings and slides while parents watch happily.",
    "vi": "Trẻ em chơi xích đu và cầu trượt trong khi cha mẹ vui vẻ quan sát.",
    "extra": [
      {
        "en": "Parents talk while their children play nearby.",
        "vi": "Cha mẹ trò chuyện trong khi con cái chơi gần đó."
      },
      {
        "en": "Birds sing while visitors walk under the trees.",
        "vi": "Chim hót trong khi khách tham quan đi dưới hàng cây."
      }
    ]
  },
  {
    "title": "5. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make với tân ngữ và tính từ để diễn tả việc khiến ai hoặc điều gì trở nên thế nào.",
    "example": "A beautiful park makes the city cleaner and more enjoyable.",
    "vi": "Một công viên đẹp làm cho thành phố sạch hơn và thú vị hơn.",
    "extra": [
      {
        "en": "Fresh flowers make the park more colorful.",
        "vi": "Hoa tươi làm cho công viên nhiều màu sắc hơn."
      },
      {
        "en": "Clean paths make daily walks more comfortable.",
        "vi": "Lối đi sạch làm cho việc đi bộ hằng ngày thoải mái hơn."
      }
    ]
  },
  {
    "title": "6. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "People should keep the park clean by using trash bins and protecting nature every day.",
    "vi": "Mọi người nên giữ công viên sạch sẽ bằng cách sử dụng thùng rác và bảo vệ thiên nhiên mỗi ngày.",
    "extra": [
      {
        "en": "Visitors should put rubbish in the bins.",
        "vi": "Khách tham quan nên bỏ rác vào thùng."
      },
      {
        "en": "Families should respect plants and animals.",
        "vi": "Các gia đình nên tôn trọng cây cối và động vật."
      }
    ]
  },
  {
    "title": "7. Gerund as subject",
    "formula": "V-ing + complement + V(s)",
    "desc": "Dùng V-ing làm chủ ngữ để nói về một hoạt động nói chung.",
    "example": "Spending time outside reduces stress and gives everyone more energy.",
    "vi": "Dành thời gian ngoài trời giúp giảm căng thẳng và mang lại cho mọi người nhiều năng lượng hơn.",
    "extra": [
      {
        "en": "Walking outside improves both health and mood.",
        "vi": "Đi bộ ngoài trời cải thiện cả sức khỏe lẫn tâm trạng."
      },
      {
        "en": "Playing together helps children make new friends.",
        "vi": "Chơi cùng nhau giúp trẻ em kết bạn mới."
      }
    ]
  },
  {
    "title": "8. Because + clause",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để nêu lý do.",
    "example": "Everyone feels excited because we can spend happy time together outside.",
    "vi": "Mọi người đều cảm thấy hào hứng vì chúng tôi có thể vui vẻ dành thời gian bên nhau ngoài trời.",
    "extra": [
      {
        "en": "We visit the park because the air feels fresh.",
        "vi": "Chúng tôi đến công viên vì không khí trong lành."
      },
      {
        "en": "Children smile because the picnic is fun.",
        "vi": "Trẻ em mỉm cười vì buổi dã ngoại vui."
      }
    ]
  },
  {
    "title": "9. Enjoy + V-ing",
    "formula": "S + enjoy(s) + V-ing",
    "desc": "Dùng enjoy theo sau bởi động từ thêm -ing để nói thích làm một hoạt động.",
    "example": "My family enjoys having a picnic in the park on weekends.",
    "vi": "Gia đình tôi thích đi dã ngoại trong công viên vào cuối tuần.",
    "extra": [
      {
        "en": "My parents enjoy walking beside the lake.",
        "vi": "Bố mẹ tôi thích đi bộ bên hồ."
      },
      {
        "en": "The children enjoy playing games on the grass.",
        "vi": "Trẻ em thích chơi trò chơi trên bãi cỏ."
      }
    ]
  },
  {
    "title": "10. Before + V-ing",
    "formula": "Before + V-ing, S + V",
    "desc": "Dùng before + V-ing để nói một hành động xảy ra trước hành động khác.",
    "example": "Before going home, we clean the area carefully and throw all trash into the bins properly.",
    "vi": "Trước khi về nhà, chúng tôi dọn sạch khu vực cẩn thận và bỏ toàn bộ rác vào thùng đúng cách.",
    "extra": [
      {
        "en": "Before leaving, we check the picnic area carefully.",
        "vi": "Trước khi rời đi, chúng tôi kiểm tra khu vực dã ngoại cẩn thận."
      },
      {
        "en": "Before sitting down, visitors choose a clean bench.",
        "vi": "Trước khi ngồi xuống, khách tham quan chọn một ghế băng sạch."
      }
    ]
  }
];
