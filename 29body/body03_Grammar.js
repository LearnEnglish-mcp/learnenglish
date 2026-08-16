const newGrammarData = [
  {
    "title": "1. Include + object",
    "formula": "S + include + O",
    "desc": "Dùng include để nói các bộ phận thuộc một nhóm.",
    "example": "They include the small intestine and the large intestine.",
    "vi": "Chúng bao gồm ruột non và ruột già.",
    "extra": [
      {
        "en": "The digestive system includes the small and large intestines.",
        "vi": "Hệ tiêu hóa bao gồm ruột non và ruột già."
      },
      {
        "en": "The eye includes several small parts that work together.",
        "vi": "Mắt gồm một số bộ phận nhỏ phối hợp với nhau."
      }
    ]
  },
  {
    "title": "2. Present simple with two verbs",
    "formula": "S + V + O + and + V + O",
    "desc": "Dùng hai động từ song song để mô tả chức năng.",
    "example": "The small intestine receives food from the stomach and absorbs most nutrients.",
    "vi": "Ruột non nhận thức ăn từ dạ dày và hấp thụ phần lớn chất dinh dưỡng.",
    "extra": [
      {
        "en": "The eyes collect light and send information.",
        "vi": "Mắt thu nhận ánh sáng và gửi thông tin."
      },
      {
        "en": "The ears receive sounds and help maintain balance.",
        "vi": "Tai tiếp nhận âm thanh và giúp giữ thăng bằng."
      }
    ]
  },
  {
    "title": "3. Relative clause with which",
    "formula": "noun, which + V",
    "desc": "Dùng which để bổ nghĩa cho danh từ đứng trước.",
    "example": "These foods contain fiber, which helps waste move easily.",
    "vi": "Những thực phẩm này chứa chất xơ, giúp chất thải di chuyển dễ dàng.",
    "extra": [
      {
        "en": "Fiber helps waste move easily through the intestines.",
        "vi": "Chất xơ giúp chất thải di chuyển dễ dàng qua ruột."
      },
      {
        "en": "The skin has layers which protect the body.",
        "vi": "Da có các lớp giúp bảo vệ cơ thể."
      }
    ]
  },
  {
    "title": "4. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "To protect the eyes, people should read in good light and rest after using screens.",
    "vi": "Để bảo vệ mắt, mọi người nên đọc ở nơi đủ sáng và nghỉ sau khi dùng màn hình.",
    "extra": [
      {
        "en": "People should rest their eyes after using screens.",
        "vi": "Mọi người nên cho mắt nghỉ sau khi dùng màn hình."
      },
      {
        "en": "People should avoid very loud music.",
        "vi": "Mọi người nên tránh âm nhạc quá lớn."
      }
    ]
  },
  {
    "title": "5. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc tác dụng.",
    "example": "Looking far away for a short time can reduce tiredness.",
    "vi": "Nhìn ra xa trong một khoảng thời gian ngắn có thể giảm mỏi mắt.",
    "extra": [
      {
        "en": "Regular checks can find eye problems early.",
        "vi": "Kiểm tra định kỳ có thể phát hiện sớm vấn đề về mắt."
      },
      {
        "en": "Quiet breaks can protect hearing.",
        "vi": "Những khoảng nghỉ yên tĩnh có thể bảo vệ thính giác."
      }
    ]
  },
  {
    "title": "6. When-clause",
    "formula": "S + V + O + when + clause",
    "desc": "Dùng when để nói một thay đổi xảy ra trong một điều kiện.",
    "example": "The pupils change size when the light becomes brighter or darker.",
    "vi": "Đồng tử thay đổi kích thước khi ánh sáng trở nên sáng hơn hoặc tối hơn.",
    "extra": [
      {
        "en": "Pupils become smaller when light is bright.",
        "vi": "Đồng tử nhỏ lại khi ánh sáng mạnh."
      },
      {
        "en": "The skin may sweat when the body becomes hot.",
        "vi": "Da có thể tiết mồ hôi khi cơ thể nóng lên."
      }
    ]
  },
  {
    "title": "7. Passive with should",
    "formula": "S + should + not + be + V3",
    "desc": "Dùng should ở dạng bị động để đưa ra lời khuyên.",
    "example": "Earphones should not be used at high volume for long periods.",
    "vi": "Không nên sử dụng tai nghe ở âm lượng cao trong thời gian dài.",
    "extra": [
      {
        "en": "Sharp objects should not be placed inside the ear.",
        "vi": "Không nên đặt vật sắc nhọn vào trong tai."
      },
      {
        "en": "Dirty hands should not be used around the eyes.",
        "vi": "Không nên dùng tay bẩn quanh mắt."
      }
    ]
  },
  {
    "title": "8. Where-clause",
    "formula": "Noun, where + clause",
    "desc": "Dùng where để nói nơi một quá trình xảy ra.",
    "example": "Signals then travel to the brain, where they become meaningful sounds.",
    "vi": "Sau đó các tín hiệu truyền đến não, nơi chúng trở thành những âm thanh có ý nghĩa.",
    "extra": [
      {
        "en": "Signals reach the brain, where sound is understood.",
        "vi": "Tín hiệu đến não, nơi âm thanh được hiểu."
      },
      {
        "en": "The inner ear is where balance signals begin.",
        "vi": "Tai trong là nơi các tín hiệu thăng bằng bắt đầu."
      }
    ]
  },
  {
    "title": "9. So for result",
    "formula": "Clause, so + clause",
    "desc": "Dùng so để nối nguyên nhân với kết quả.",
    "example": "Strong sunlight can damage the skin, so hats and sunscreen may provide protection.",
    "vi": "Ánh nắng mạnh có thể làm tổn thương da, vì vậy mũ và kem chống nắng có thể giúp bảo vệ.",
    "extra": [
      {
        "en": "Loud music can harm hearing, so lower the volume.",
        "vi": "Âm nhạc lớn có thể hại thính giác, vì vậy hãy giảm âm lượng."
      },
      {
        "en": "Sunlight can damage skin, so use sunscreen.",
        "vi": "Ánh nắng có thể làm tổn thương da, vì vậy hãy dùng kem chống nắng."
      }
    ]
  },
  {
    "title": "10. Superlative adjective",
    "formula": "S + be + the + superlative + noun",
    "desc": "Dùng tính từ so sánh nhất để nói mức độ cao nhất.",
    "example": "The skin is the largest organ of the human body.",
    "vi": "Da là cơ quan lớn nhất của cơ thể người.",
    "extra": [
      {
        "en": "The skin is the body's largest protective organ.",
        "vi": "Da là cơ quan bảo vệ lớn nhất của cơ thể."
      },
      {
        "en": "The intestine is among the longest digestive organs.",
        "vi": "Ruột nằm trong số những cơ quan tiêu hóa dài nhất."
      }
    ]
  }
];
