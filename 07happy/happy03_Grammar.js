// ===== happy03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. V-ing làm chủ ngữ",
    "formula": "V-ing phrase + can + V",
    "desc": "Dùng cụm V-ing làm chủ ngữ để nói về một hoạt động nói chung.",
    "example": "Doing things we love can make life more enjoyable.",
    "vi": "Làm những điều mình yêu thích có thể khiến cuộc sống thú vị hơn.",
    "extra": [
      {
        "en": "Reading can make free time more enjoyable.",
        "vi": "Đọc sách có thể làm thời gian rảnh thú vị hơn."
      },
      {
        "en": "Exercising can improve both health and mood.",
        "vi": "Tập thể dục có thể cải thiện cả sức khỏe và tâm trạng."
      }
    ]
  },
  {
    "title": "2. When-clause",
    "formula": "When + S + V, S + V",
    "desc": "Dùng when để nêu tình huống dẫn đến một kết quả.",
    "example": "When we practice often, we learn new skills and become more confident.",
    "vi": "Khi luyện tập thường xuyên, chúng ta học kỹ năng mới và trở nên tự tin hơn.",
    "extra": [
      {
        "en": "When we practice, we learn new skills.",
        "vi": "Khi luyện tập, chúng ta học kỹ năng mới."
      },
      {
        "en": "When the mind feels calm, daily life feels easier.",
        "vi": "Khi tâm trí bình tĩnh, cuộc sống hằng ngày trở nên dễ chịu hơn."
      }
    ]
  },
  {
    "title": "3. Should + động từ nguyên mẫu",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Everyone should make some time for activities they love.",
    "vi": "Mọi người nên dành một chút thời gian cho những hoạt động mình yêu thích.",
    "extra": [
      {
        "en": "Everyone should make time for healthy hobbies.",
        "vi": "Mọi người nên dành thời gian cho những sở thích lành mạnh."
      },
      {
        "en": "We should spend money carefully.",
        "vi": "Chúng ta nên chi tiêu tiền bạc cẩn thận."
      }
    ]
  },
  {
    "title": "4. By + V-ing",
    "formula": "By + V-ing, S + modal + V",
    "desc": "Dùng by + V-ing để chỉ cách thức đạt một kết quả.",
    "example": "By balancing work, study, and hobbies, we can feel more energetic, creative, happy, peaceful, confident, and more satisfied in our everyday lives each day.",
    "vi": "Bằng cách cân bằng công việc, học tập và sở thích, chúng ta có thể cảm thấy tràn đầy năng lượng, sáng tạo, hạnh phúc, bình yên, tự tin và hài lòng hơn trong cuộc sống hằng ngày.",
    "extra": [
      {
        "en": "By exercising regularly, we can feel stronger.",
        "vi": "Bằng cách tập thể dục thường xuyên, chúng ta có thể cảm thấy khỏe hơn."
      },
      {
        "en": "By balancing work and rest, people can feel calmer.",
        "vi": "Bằng cách cân bằng công việc và nghỉ ngơi, mọi người có thể cảm thấy bình tĩnh hơn."
      }
    ]
  },
  {
    "title": "5. Hai mệnh đề với and",
    "formula": "Clause + and + clause",
    "desc": "Dùng and để nối hai ý có quan hệ bổ sung.",
    "example": "When our body feels strong and our mind feels calm, we can enjoy life more fully.",
    "vi": "Khi cơ thể khỏe mạnh và tâm trí bình tĩnh, chúng ta có thể tận hưởng cuộc sống trọn vẹn hơn.",
    "extra": [
      {
        "en": "The body feels strong and the mind feels calm.",
        "vi": "Cơ thể khỏe mạnh và tâm trí bình tĩnh."
      },
      {
        "en": "People rest and they return to work with more energy.",
        "vi": "Mọi người nghỉ ngơi và trở lại làm việc với nhiều năng lượng hơn."
      }
    ]
  },
  {
    "title": "6. By + danh sách V-ing",
    "formula": "S + V + by + V-ing, V-ing, and V-ing",
    "desc": "Dùng by cùng các động từ V-ing song song để nêu nhiều cách thực hiện.",
    "example": "We can protect our health by eating balanced meals, sleeping enough, and exercising regularly.",
    "vi": "Chúng ta có thể bảo vệ sức khỏe bằng cách ăn các bữa cân bằng, ngủ đủ và tập thể dục thường xuyên.",
    "extra": [
      {
        "en": "We protect health by eating well and sleeping enough.",
        "vi": "Chúng ta bảo vệ sức khỏe bằng cách ăn uống tốt và ngủ đủ."
      },
      {
        "en": "People reduce stress by resting, walking, and talking.",
        "vi": "Mọi người giảm căng thẳng bằng cách nghỉ ngơi, đi bộ và trò chuyện."
      }
    ]
  },
  {
    "title": "7. Because-clause chỉ nguyên nhân",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để giải thích nguyên nhân.",
    "example": "Money can make life easier because it helps people pay for food, housing, education, and healthcare.",
    "vi": "Tiền có thể làm cuộc sống dễ dàng hơn vì nó giúp mọi người chi trả cho thức ăn, nhà ở, giáo dục và chăm sóc sức khỏe.",
    "extra": [
      {
        "en": "Money can help because it pays for important needs.",
        "vi": "Tiền có thể hữu ích vì nó chi trả cho những nhu cầu quan trọng."
      },
      {
        "en": "Exercise supports happiness because it improves health.",
        "vi": "Tập thể dục hỗ trợ hạnh phúc vì nó cải thiện sức khỏe."
      }
    ]
  },
  {
    "title": "8. However ở đầu câu",
    "formula": "However, clause",
    "desc": "Dùng however để nối một ý tương phản với câu trước.",
    "example": "However, having a lot of money does not always create true happiness.",
    "vi": "Tuy nhiên, có nhiều tiền không phải lúc nào cũng tạo ra hạnh phúc thật sự.",
    "extra": [
      {
        "en": "Money is useful. However, it cannot replace friendship.",
        "vi": "Tiền hữu ích. Tuy nhiên, nó không thể thay thế tình bạn."
      },
      {
        "en": "Work is important. However, people also need rest.",
        "vi": "Công việc quan trọng. Tuy nhiên, mọi người cũng cần nghỉ ngơi."
      }
    ]
  },
  {
    "title": "9. Avoid + V-ing",
    "formula": "S + avoid + V-ing",
    "desc": "Dùng avoid + V-ing để nói tránh làm một việc.",
    "example": "We should save, spend carefully, and avoid comparing ourselves with others.",
    "vi": "Chúng ta nên tiết kiệm, chi tiêu cẩn thận và tránh so sánh bản thân với người khác.",
    "extra": [
      {
        "en": "People should avoid comparing themselves with others.",
        "vi": "Mọi người nên tránh so sánh bản thân với người khác."
      },
      {
        "en": "We can avoid wasting money by planning carefully.",
        "vi": "Chúng ta có thể tránh lãng phí tiền bằng cách lên kế hoạch cẩn thận."
      }
    ]
  },
  {
    "title": "10. Keep + V-ing",
    "formula": "S + keep + V-ing",
    "desc": "Dùng keep + V-ing để nói tiếp tục làm một việc.",
    "example": "When problems happen, we can learn from them and keep moving forward.",
    "vi": "Khi vấn đề xảy ra, chúng ta có thể học từ chúng và tiếp tục tiến về phía trước.",
    "extra": [
      {
        "en": "We can keep moving forward after a difficult day.",
        "vi": "Chúng ta có thể tiếp tục tiến về phía trước sau một ngày khó khăn."
      },
      {
        "en": "Healthy habits help us keep feeling strong.",
        "vi": "Những thói quen lành mạnh giúp chúng ta tiếp tục cảm thấy khỏe mạnh."
      }
    ]
  }
];
