const newGrammarData = [
  {
    "title": "1. Present simple for general facts",
    "formula": "S + be + noun phrase",
    "desc": "Dùng hiện tại đơn để nói sự thật chung.",
    "example": "Learning music is a useful activity for children and adults everywhere.",
    "vi": "Học âm nhạc là một hoạt động hữu ích cho trẻ em và người lớn ở khắp nơi.",
    "extra": [
      {
        "en": "Learning music is useful for children and adults.",
        "vi": "Học âm nhạc hữu ích cho trẻ em và người lớn."
      },
      {
        "en": "Music education is valuable for lifelong learning.",
        "vi": "Giáo dục âm nhạc có giá trị cho việc học suốt đời."
      }
    ]
  },
  {
    "title": "2. Help + object + bare infinitive",
    "formula": "S + help + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu để nói tác dụng.",
    "example": "Music lessons help students improve listening skills, memory, and concentration.",
    "vi": "Các bài học âm nhạc giúp học sinh cải thiện kỹ năng nghe, trí nhớ và sự tập trung.",
    "extra": [
      {
        "en": "Music lessons help students improve concentration.",
        "vi": "Bài học âm nhạc giúp học sinh cải thiện sự tập trung."
      },
      {
        "en": "Practice helps singers build confidence and skill.",
        "vi": "Luyện tập giúp ca sĩ xây dựng sự tự tin và kỹ năng."
      }
    ]
  },
  {
    "title": "3. Include + object",
    "formula": "S + include + O",
    "desc": "Dùng include để nói thành phần được đưa vào.",
    "example": "Many schools include music classes in their weekly schedules.",
    "vi": "Nhiều trường học đưa lớp âm nhạc vào thời khóa biểu hằng tuần.",
    "extra": [
      {
        "en": "Schools include music classes in weekly schedules.",
        "vi": "Trường học đưa lớp âm nhạc vào thời khóa biểu hằng tuần."
      },
      {
        "en": "Programs include songs, instruments, and creative activities.",
        "vi": "Chương trình gồm bài hát, nhạc cụ và hoạt động sáng tạo."
      }
    ]
  },
  {
    "title": "4. Past simple",
    "formula": "S + V2 + O",
    "desc": "Dùng quá khứ đơn để kể sự kiện đã xảy ra.",
    "example": "Last semester, many classes performed beautiful songs for parents during a school celebration.",
    "vi": "Học kỳ trước, nhiều lớp đã biểu diễn những bài hát hay cho phụ huynh trong một lễ kỷ niệm ở trường.",
    "extra": [
      {
        "en": "Students performed songs for parents last semester.",
        "vi": "Học sinh đã biểu diễn bài hát cho phụ huynh học kỳ trước."
      },
      {
        "en": "Artists joined a charity concert last month.",
        "vi": "Nghệ sĩ tham gia buổi hòa nhạc từ thiện tháng trước."
      }
    ]
  },
  {
    "title": "5. Future with will",
    "formula": "S + will + V",
    "desc": "Dùng will để nói tương lai.",
    "example": "More people will choose music lessons in the future.",
    "vi": "Nhiều người hơn sẽ chọn học âm nhạc trong tương lai.",
    "extra": [
      {
        "en": "More students will choose online music classes.",
        "vi": "Nhiều học sinh hơn sẽ chọn lớp âm nhạc trực tuyến."
      },
      {
        "en": "Traditional music will remain valuable in the future.",
        "vi": "Âm nhạc truyền thống sẽ vẫn có giá trị trong tương lai."
      }
    ]
  },
  {
    "title": "6. Before + V-ing",
    "formula": "before + V-ing",
    "desc": "Dùng before + V-ing để nói hành động xảy ra trước một hành động khác.",
    "example": "They spend many hours practicing songs before recording albums or performing on stage.",
    "vi": "Họ dành nhiều giờ luyện tập bài hát trước khi thu album hoặc biểu diễn trên sân khấu.",
    "extra": [
      {
        "en": "Singers practice before recording new albums.",
        "vi": "Ca sĩ luyện tập trước khi thu album mới."
      },
      {
        "en": "Musicians prepare carefully before performing on stage.",
        "vi": "Nhạc sĩ chuẩn bị cẩn thận trước khi biểu diễn trên sân khấu."
      }
    ]
  },
  {
    "title": "7. To-infinitive of purpose",
    "formula": "S + V + to + V",
    "desc": "Dùng to-infinitive để nói mục đích.",
    "example": "Last month, several artists joined a special concert to raise money for children.",
    "vi": "Tháng trước, một số nghệ sĩ tham gia một buổi hòa nhạc đặc biệt để gây quỹ cho trẻ em.",
    "extra": [
      {
        "en": "Artists join concerts to raise money for children.",
        "vi": "Nghệ sĩ tham gia hòa nhạc để gây quỹ cho trẻ em."
      },
      {
        "en": "Schools teach songs to protect cultural traditions.",
        "vi": "Trường học dạy bài hát để bảo vệ truyền thống văn hóa."
      }
    ]
  },
  {
    "title": "8. While + V-ing",
    "formula": "while + V-ing",
    "desc": "Dùng while + V-ing để nói hai hành động xảy ra đồng thời.",
    "example": "Students learn about local culture while singing and playing simple musical instruments together.",
    "vi": "Học sinh tìm hiểu văn hóa địa phương trong khi hát và cùng chơi các nhạc cụ đơn giản.",
    "extra": [
      {
        "en": "Students learn culture while singing traditional songs.",
        "vi": "Học sinh học văn hóa trong khi hát các bài hát truyền thống."
      },
      {
        "en": "Musicians communicate while playing instruments together.",
        "vi": "Nhạc sĩ giao tiếp trong khi cùng chơi nhạc cụ."
      }
    ]
  },
  {
    "title": "9. Present continuous with because",
    "formula": "S + be + V-ing + because + clause",
    "desc": "Dùng hiện tại tiếp diễn để nói sự thay đổi đang diễn ra và because để nêu nguyên nhân.",
    "example": "Music is changing because technology is developing very quickly today.",
    "vi": "Âm nhạc đang thay đổi vì công nghệ đang phát triển rất nhanh hiện nay.",
    "extra": [
      {
        "en": "Music is changing because technology is developing quickly.",
        "vi": "Âm nhạc đang thay đổi vì công nghệ phát triển nhanh."
      },
      {
        "en": "Online concerts are growing because audiences enjoy convenience.",
        "vi": "Hòa nhạc trực tuyến đang phát triển vì khán giả thích sự tiện lợi."
      }
    ]
  },
  {
    "title": "10. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để nói khả năng nhờ công nghệ.",
    "example": "People can discover new songs, watch performances, and listen to albums through digital platforms.",
    "vi": "Mọi người có thể khám phá bài hát mới, xem các phần biểu diễn và nghe album qua các nền tảng kỹ thuật số.",
    "extra": [
      {
        "en": "People can discover music through digital platforms.",
        "vi": "Mọi người có thể khám phá âm nhạc qua nền tảng kỹ thuật số."
      },
      {
        "en": "Artists can connect with audiences around the world.",
        "vi": "Nghệ sĩ có thể kết nối với khán giả trên toàn thế giới."
      }
    ]
  }
];
