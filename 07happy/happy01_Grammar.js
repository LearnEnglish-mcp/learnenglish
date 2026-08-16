// ===== happy01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Hiện tại đơn với động từ liên kết be",
    "formula": "S + be + complement",
    "desc": "Dùng hiện tại đơn với be để mô tả trạng thái hoặc đặc điểm.",
    "example": "Happiness is a warm feeling that makes life brighter and more meaningful.",
    "vi": "Hạnh phúc là một cảm giác ấm áp khiến cuộc sống tươi sáng và ý nghĩa hơn.",
    "extra": [
      {
        "en": "Happiness is important in everyday life.",
        "vi": "Hạnh phúc quan trọng trong cuộc sống hằng ngày."
      },
      {
        "en": "A kind family is a source of comfort.",
        "vi": "Một gia đình tử tế là nguồn an ủi."
      }
    ]
  },
  {
    "title": "2. Can + động từ nguyên mẫu",
    "formula": "S + can + V",
    "desc": "Dùng can để nói về khả năng hoặc điều có thể xảy ra.",
    "example": "It can come from many simple things, such as a kind smile, a good meal, or a peaceful morning.",
    "vi": "Nó có thể đến từ nhiều điều đơn giản, chẳng hạn như một nụ cười tử tế, một bữa ăn ngon hoặc một buổi sáng yên bình.",
    "extra": [
      {
        "en": "Small moments can bring great joy.",
        "vi": "Những khoảnh khắc nhỏ có thể mang lại niềm vui lớn."
      },
      {
        "en": "Friends can make a difficult day better.",
        "vi": "Bạn bè có thể làm một ngày khó khăn trở nên tốt hơn."
      }
    ]
  },
  {
    "title": "3. Mệnh đề với when và while",
    "formula": "S + V + when/while + clause",
    "desc": "Dùng when hoặc while để nối các sự việc xảy ra trong một hoàn cảnh hoặc thời điểm.",
    "example": "Some people feel happy when they achieve a goal, while others enjoy spending time with family and friends.",
    "vi": "Một số người cảm thấy hạnh phúc khi đạt được mục tiêu, trong khi những người khác thích dành thời gian với gia đình và bạn bè.",
    "extra": [
      {
        "en": "People smile when they hear kind words.",
        "vi": "Mọi người mỉm cười khi nghe những lời tử tế."
      },
      {
        "en": "Some people rest while others take a short walk.",
        "vi": "Một số người nghỉ ngơi trong khi những người khác đi dạo ngắn."
      }
    ]
  },
  {
    "title": "4. Phủ định hiện tại đơn với does not",
    "formula": "S + does not + V",
    "desc": "Dùng does not với chủ ngữ số ít để tạo câu phủ định ở hiện tại đơn.",
    "example": "Happiness does not always depend on money or success.",
    "vi": "Hạnh phúc không phải lúc nào cũng phụ thuộc vào tiền bạc hay thành công.",
    "extra": [
      {
        "en": "Happiness does not require expensive things.",
        "vi": "Hạnh phúc không đòi hỏi những thứ đắt tiền."
      },
      {
        "en": "A good relationship does not grow without care.",
        "vi": "Một mối quan hệ tốt không phát triển nếu thiếu sự quan tâm."
      }
    ]
  },
  {
    "title": "5. To-infinitive chỉ mục đích",
    "formula": "To + V, S + modal + V",
    "desc": "Dùng cụm to-infinitive ở đầu câu để nêu mục đích.",
    "example": "To live happily, we should notice the good things around us.",
    "vi": "Để sống hạnh phúc, chúng ta nên chú ý đến những điều tốt đẹp quanh mình.",
    "extra": [
      {
        "en": "To feel calmer, we can take a short rest.",
        "vi": "Để cảm thấy bình tĩnh hơn, chúng ta có thể nghỉ ngắn."
      },
      {
        "en": "To build trust, people should listen carefully.",
        "vi": "Để xây dựng niềm tin, mọi người nên lắng nghe cẩn thận."
      }
    ]
  },
  {
    "title": "6. Liệt kê động từ sau modal",
    "formula": "S + can + V1, V2, and V3",
    "desc": "Sau động từ khuyết thiếu, có thể liệt kê nhiều động từ nguyên mẫu song song.",
    "example": "We can be thankful, help others, and take care of ourselves.",
    "vi": "Chúng ta có thể biết ơn, giúp đỡ người khác và chăm sóc bản thân.",
    "extra": [
      {
        "en": "We can smile, listen, and help others.",
        "vi": "Chúng ta có thể mỉm cười, lắng nghe và giúp người khác."
      },
      {
        "en": "Families can talk, walk, and relax together.",
        "vi": "Các gia đình có thể trò chuyện, đi dạo và thư giãn cùng nhau."
      }
    ]
  },
  {
    "title": "7. When-clause với hiện tại đơn",
    "formula": "S + V + when + S + V",
    "desc": "Dùng when để nói điều xảy ra khi một điều kiện hoặc tình huống quen thuộc xuất hiện.",
    "example": "Daily life becomes better when we slow down and enjoy small experiences.",
    "vi": "Cuộc sống hằng ngày trở nên tốt đẹp hơn khi chúng ta sống chậm lại và tận hưởng những trải nghiệm nhỏ.",
    "extra": [
      {
        "en": "Life feels better when we notice small joys.",
        "vi": "Cuộc sống tốt đẹp hơn khi chúng ta chú ý đến những niềm vui nhỏ."
      },
      {
        "en": "People feel closer when they share time together.",
        "vi": "Mọi người cảm thấy gần gũi hơn khi dành thời gian bên nhau."
      }
    ]
  },
  {
    "title": "8. By + V-ing",
    "formula": "S + V + by + V-ing",
    "desc": "Dùng by + V-ing để nói cách thức thực hiện một việc.",
    "example": "We can create more happiness by paying attention to what is good.",
    "vi": "Chúng ta có thể tạo thêm hạnh phúc bằng cách chú ý đến những điều tốt đẹp.",
    "extra": [
      {
        "en": "We can feel happier by helping other people.",
        "vi": "Chúng ta có thể cảm thấy hạnh phúc hơn bằng cách giúp đỡ người khác."
      },
      {
        "en": "Families grow closer by spending time together.",
        "vi": "Các gia đình trở nên gần gũi hơn bằng cách dành thời gian bên nhau."
      }
    ]
  },
  {
    "title": "9. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help với tân ngữ và động từ nguyên mẫu để nói giúp ai làm gì.",
    "example": "Simple joy helps us feel calm, grateful, and more satisfied with life today.",
    "vi": "Niềm vui giản dị giúp chúng ta cảm thấy bình tĩnh, biết ơn và hài lòng hơn với cuộc sống.",
    "extra": [
      {
        "en": "Kind words help people feel safe.",
        "vi": "Những lời tử tế giúp mọi người cảm thấy an toàn."
      },
      {
        "en": "Good memories help families stay close.",
        "vi": "Những kỷ niệm đẹp giúp các gia đình luôn gần gũi."
      }
    ]
  },
  {
    "title": "10. So sánh hơn với tính từ",
    "formula": "S + linking verb + comparative adjective",
    "desc": "Dùng tính từ so sánh hơn để nói một trạng thái tăng lên hoặc khác đi.",
    "example": "When family members listen, forgive, and help one another, the home becomes a warmer, safer, and much happier place for everyone together.",
    "vi": "Khi các thành viên lắng nghe, tha thứ và giúp đỡ nhau, ngôi nhà trở thành một nơi ấm áp, an toàn và hạnh phúc hơn nhiều cho mọi người.",
    "extra": [
      {
        "en": "Kindness can make a home warmer.",
        "vi": "Lòng tốt có thể làm một mái ấm trở nên ấm áp hơn."
      },
      {
        "en": "Open conversations make relationships stronger.",
        "vi": "Những cuộc trò chuyện cởi mở làm các mối quan hệ bền chặt hơn."
      }
    ]
  }
];
