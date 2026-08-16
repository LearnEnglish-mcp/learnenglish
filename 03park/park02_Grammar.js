// ===== park02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Have/has + noun",
    "formula": "S + have/has + O",
    "desc": "Dùng have/has để nói một nơi hoặc người có điều gì.",
    "example": "Every park has rules to keep visitors safe and comfortable every day.",
    "vi": "Mỗi công viên đều có các quy tắc để giữ cho khách tham quan an toàn và thoải mái mỗi ngày.",
    "extra": [
      {
        "en": "Every playground has simple safety rules.",
        "vi": "Mỗi sân chơi có những quy tắc an toàn đơn giản."
      },
      {
        "en": "The park has several clean walking paths.",
        "vi": "Công viên có một số lối đi bộ sạch sẽ."
      }
    ]
  },
  {
    "title": "2. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên hoặc quy tắc nên làm.",
    "example": "People should follow these rules to protect nature and respect others.",
    "vi": "Mọi người nên tuân theo các quy tắc này để bảo vệ thiên nhiên và tôn trọng người khác.",
    "extra": [
      {
        "en": "Visitors should respect other people in the park.",
        "vi": "Khách tham quan nên tôn trọng những người khác trong công viên."
      },
      {
        "en": "Children should wait patiently for their turn.",
        "vi": "Trẻ em nên kiên nhẫn chờ đến lượt mình."
      }
    ]
  },
  {
    "title": "3. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu để nói giúp ai làm gì.",
    "example": "Good behavior helps everyone enjoy a clean and peaceful environment together.",
    "vi": "Hành vi tốt giúp mọi người cùng tận hưởng một môi trường sạch sẽ và yên bình.",
    "extra": [
      {
        "en": "Clear rules help visitors enjoy the park safely.",
        "vi": "Quy tắc rõ ràng giúp khách tham quan tận hưởng công viên an toàn."
      },
      {
        "en": "Walking helps people reduce stress after work.",
        "vi": "Đi bộ giúp mọi người giảm căng thẳng sau giờ làm."
      }
    ]
  },
  {
    "title": "4. Passive with should be",
    "formula": "S + should be + past participle",
    "desc": "Dùng should be + quá khứ phân từ để nói điều nên được thực hiện.",
    "example": "Dogs should stay on leashes, and loud music should be avoided.",
    "vi": "Chó nên được giữ bằng dây dắt và nên tránh mở nhạc lớn.",
    "extra": [
      {
        "en": "Park equipment should be checked regularly.",
        "vi": "Thiết bị công viên nên được kiểm tra thường xuyên."
      },
      {
        "en": "Loud activities should be limited near quiet areas.",
        "vi": "Các hoạt động ồn ào nên được hạn chế gần khu vực yên tĩnh."
      }
    ]
  },
  {
    "title": "5. Must + bare infinitive",
    "formula": "S + must + V",
    "desc": "Dùng must để diễn tả yêu cầu hoặc nghĩa vụ mạnh.",
    "example": "People must use playground equipment safely and watch young children carefully always.",
    "vi": "Mọi người phải sử dụng thiết bị sân chơi an toàn và luôn trông chừng trẻ nhỏ cẩn thận.",
    "extra": [
      {
        "en": "Adults must watch young children near the swings.",
        "vi": "Người lớn phải trông chừng trẻ nhỏ gần xích đu."
      },
      {
        "en": "Visitors must use playground equipment safely.",
        "vi": "Khách tham quan phải sử dụng thiết bị sân chơi an toàn."
      }
    ]
  },
  {
    "title": "6. When + present simple",
    "formula": "When + S + V, S + V",
    "desc": "Dùng when để nói điều xảy ra khi một tình huống khác diễn ra.",
    "example": "When people follow simple rules, parks stay beautiful and clean for many years.",
    "vi": "Khi mọi người tuân theo những quy tắc đơn giản, công viên sẽ đẹp và sạch trong nhiều năm.",
    "extra": [
      {
        "en": "When families follow the rules, everyone feels safer.",
        "vi": "Khi các gia đình tuân theo quy tắc, mọi người cảm thấy an toàn hơn."
      },
      {
        "en": "When children share, playground games become friendlier.",
        "vi": "Khi trẻ em biết chia sẻ, trò chơi ở sân chơi trở nên thân thiện hơn."
      }
    ]
  },
  {
    "title": "7. Become + adjective",
    "formula": "S + become(s) + adjective",
    "desc": "Dùng become + tính từ để diễn tả sự thay đổi trạng thái.",
    "example": "A playground helps children become active and confident.",
    "vi": "Sân chơi giúp trẻ em trở nên năng động và tự tin.",
    "extra": [
      {
        "en": "Regular exercise helps children become stronger.",
        "vi": "Tập thể dục thường xuyên giúp trẻ em trở nên khỏe hơn."
      },
      {
        "en": "Outdoor play can help young people become confident.",
        "vi": "Vui chơi ngoài trời có thể giúp người trẻ trở nên tự tin."
      }
    ]
  },
  {
    "title": "8. While + V-ing / clause",
    "formula": "While + V-ing, S + V",
    "desc": "Dùng while để nói một hành động diễn ra trong lúc một hành động khác đang xảy ra.",
    "example": "While walking, people can watch birds, smell flowers, and hear gentle sounds.",
    "vi": "Trong khi đi bộ, mọi người có thể ngắm chim, ngửi hoa và nghe những âm thanh nhẹ nhàng.",
    "extra": [
      {
        "en": "While walking, visitors can enjoy the fresh air.",
        "vi": "Trong khi đi bộ, khách tham quan có thể tận hưởng không khí trong lành."
      },
      {
        "en": "While resting, families can watch birds near the lake.",
        "vi": "Trong khi nghỉ ngơi, các gia đình có thể ngắm chim gần hồ."
      }
    ]
  },
  {
    "title": "9. Both + noun + and + noun",
    "formula": "both + noun + and + noun",
    "desc": "Dùng cấu trúc both + danh từ + and + danh từ để nối hai yếu tố cùng được nhấn mạnh.",
    "example": "Walking in the park improves both health and happiness.",
    "vi": "Đi bộ trong công viên cải thiện cả sức khỏe lẫn niềm vui.",
    "extra": [
      {
        "en": "Walking improves both fitness and mood.",
        "vi": "Đi bộ cải thiện cả thể lực lẫn tâm trạng."
      },
      {
        "en": "Parks support both health and relaxation.",
        "vi": "Công viên hỗ trợ cả sức khỏe lẫn sự thư giãn."
      }
    ]
  },
  {
    "title": "10. Keep + object + adjective",
    "formula": "keep + O + adjective",
    "desc": "Dùng keep + tân ngữ + tính từ để diễn tả duy trì một trạng thái.",
    "example": "Everyone should enjoy nature and help keep parks clean for future visitors always.",
    "vi": "Mọi người nên tận hưởng thiên nhiên và giúp giữ công viên sạch sẽ cho những khách tham quan trong tương lai.",
    "extra": [
      {
        "en": "Everyone can help keep public parks clean.",
        "vi": "Mọi người có thể giúp giữ công viên công cộng sạch sẽ."
      },
      {
        "en": "Simple habits keep playground equipment safe.",
        "vi": "Những thói quen đơn giản giữ thiết bị sân chơi an toàn."
      }
    ]
  }
];
