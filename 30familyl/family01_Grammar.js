const newGrammarData = [
  {
    "title": "1. Present simple with have",
    "formula": "S + have/has + O",
    "desc": "Dùng hiện tại đơn với have/has để nói sở hữu hoặc thành phần.",
    "example": "My family has four people: my father, my mother, my younger sister, and me.",
    "vi": "Gia đình tôi có bốn người: cha tôi, mẹ tôi, em gái tôi và tôi.",
    "extra": [
      {
        "en": "My family has five people at home.",
        "vi": "Gia đình tôi có năm người ở nhà."
      },
      {
        "en": "Nam has a helpful friend at school.",
        "vi": "Nam có một người bạn hay giúp đỡ ở trường."
      }
    ]
  },
  {
    "title": "2. But for contrast",
    "formula": "Clause + but + clause",
    "desc": "Dùng but để nối hai ý tương phản.",
    "example": "We live in a small but comfortable house in the city.",
    "vi": "Chúng tôi sống trong một ngôi nhà nhỏ nhưng thoải mái ở thành phố.",
    "extra": [
      {
        "en": "Our house is small but very comfortable.",
        "vi": "Nhà chúng tôi nhỏ nhưng rất thoải mái."
      },
      {
        "en": "My sister is busy but always cheerful.",
        "vi": "Em gái tôi bận nhưng luôn vui vẻ."
      }
    ]
  },
  {
    "title": "3. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "My family is very important to me because they always care about me and help me in difficult times.",
    "vi": "Gia đình rất quan trọng với tôi vì họ luôn quan tâm và giúp đỡ tôi trong những lúc khó khăn.",
    "extra": [
      {
        "en": "I study hard because school is important.",
        "vi": "Tôi học chăm chỉ vì trường học quan trọng."
      },
      {
        "en": "We talk together because family time matters.",
        "vi": "Chúng tôi trò chuyện cùng nhau vì thời gian gia đình quan trọng."
      }
    ]
  },
  {
    "title": "4. Present simple third person",
    "formula": "S + V-s/es + complement",
    "desc": "Dùng hiện tại đơn với ngôi thứ ba số ít.",
    "example": "My father works in an office, and my mother is a teacher.",
    "vi": "Cha tôi làm việc trong một văn phòng, còn mẹ tôi là giáo viên.",
    "extra": [
      {
        "en": "My father works in a city office.",
        "vi": "Cha tôi làm việc trong một văn phòng ở thành phố."
      },
      {
        "en": "My sister studies English every evening.",
        "vi": "Em gái tôi học tiếng Anh mỗi tối."
      }
    ]
  },
  {
    "title": "5. Enjoy + V-ing",
    "formula": "S + enjoy(s) + V-ing",
    "desc": "Dùng enjoy + V-ing để nói thích làm một hoạt động.",
    "example": "My sister is a student and enjoys drawing pictures.",
    "vi": "Em gái tôi là học sinh và thích vẽ tranh.",
    "extra": [
      {
        "en": "I enjoy reading books after school.",
        "vi": "Tôi thích đọc sách sau giờ học."
      },
      {
        "en": "My friend enjoys playing football on weekends.",
        "vi": "Bạn tôi thích chơi bóng đá vào cuối tuần."
      }
    ]
  },
  {
    "title": "6. Usually + present simple",
    "formula": "S + usually + V",
    "desc": "Dùng trạng từ tần suất usually với hiện tại đơn.",
    "example": "In the evening, we usually have dinner together and talk about our day.",
    "vi": "Buổi tối, chúng tôi thường ăn tối cùng nhau và trò chuyện về một ngày của mình.",
    "extra": [
      {
        "en": "We usually eat dinner together at home.",
        "vi": "Chúng tôi thường ăn tối cùng nhau ở nhà."
      },
      {
        "en": "I usually listen to music after studying.",
        "vi": "Tôi thường nghe nhạc sau khi học."
      }
    ]
  },
  {
    "title": "7. Favorite + noun",
    "formula": "possessive + favorite + noun + be + ...",
    "desc": "Dùng favorite để nói sở thích yêu thích nhất.",
    "example": "My favorite hobby is listening to music because it helps me relax and feel happy after studying.",
    "vi": "Sở thích yêu thích nhất của tôi là nghe nhạc vì nó giúp tôi thư giãn và cảm thấy vui sau khi học.",
    "extra": [
      {
        "en": "My favorite hobby is reading interesting books.",
        "vi": "Sở thích yêu thích của tôi là đọc sách thú vị."
      },
      {
        "en": "Her favorite activity is drawing pictures.",
        "vi": "Hoạt động yêu thích của cô ấy là vẽ tranh."
      }
    ]
  },
  {
    "title": "8. Like + V-ing",
    "formula": "S + like + V-ing",
    "desc": "Dùng like + V-ing để nói sở thích.",
    "example": "Besides that, I like playing badminton with my friends in the afternoon.",
    "vi": "Ngoài ra, tôi thích chơi cầu lông với bạn bè vào buổi chiều.",
    "extra": [
      {
        "en": "I like playing badminton with close friends.",
        "vi": "Tôi thích chơi cầu lông với bạn thân."
      },
      {
        "en": "We like watching movies after school.",
        "vi": "Chúng tôi thích xem phim sau giờ học."
      }
    ]
  },
  {
    "title": "9. Whenever-clause",
    "formula": "Whenever + clause, main clause",
    "desc": "Dùng whenever để nói bất cứ khi nào một tình huống xảy ra.",
    "example": "Whenever I do not understand my homework, he explains it to me patiently.",
    "vi": "Bất cứ khi nào tôi không hiểu bài tập về nhà, bạn ấy kiên nhẫn giải thích cho tôi.",
    "extra": [
      {
        "en": "Whenever I need help, Nam explains clearly.",
        "vi": "Bất cứ khi nào tôi cần giúp, Nam giải thích rõ ràng."
      },
      {
        "en": "Whenever we meet, we talk about school.",
        "vi": "Bất cứ khi nào gặp nhau, chúng tôi nói về trường học."
      }
    ]
  },
  {
    "title": "10. Present perfect",
    "formula": "S + have/has + V3",
    "desc": "Dùng hiện tại hoàn thành để nói kết quả liên quan đến hiện tại.",
    "example": "Thanks to his help, my grades have improved a lot this year.",
    "vi": "Nhờ sự giúp đỡ của bạn ấy, điểm số của tôi đã cải thiện rất nhiều trong năm nay.",
    "extra": [
      {
        "en": "My English has improved this year.",
        "vi": "Tiếng Anh của tôi đã cải thiện trong năm nay."
      },
      {
        "en": "His grades have improved after regular study.",
        "vi": "Điểm của bạn ấy đã cải thiện sau khi học đều đặn."
      }
    ]
  }
];
