// ===== festival02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Passive voice: is held",
    "formula": "S + be + past participle",
    "desc": "Dùng câu bị động để nói lễ hội được tổ chức ở đâu.",
    "example": "Giong Festival is held in Hanoi to honor Saint Giong, a legendary Vietnamese hero.",
    "vi": "Lễ hội Gióng được tổ chức tại Hà Nội để tôn vinh Thánh Gióng, một vị anh hùng huyền thoại của Việt Nam.",
    "extra": [
      {
        "en": "The ceremony is organized by local villagers every year.",
        "vi": "Nghi lễ được dân làng địa phương tổ chức hằng năm."
      },
      {
        "en": "Traditional objects are carried through the village carefully.",
        "vi": "Các vật phẩm truyền thống được mang qua làng một cách cẩn thận."
      }
    ]
  },
  {
    "title": "2. To-infinitive of purpose",
    "formula": "S + V + to + V",
    "desc": "Dùng to + động từ nguyên mẫu để diễn tả mục đích.",
    "example": "It remembers his fight to protect the country from foreign enemies.",
    "vi": "Lễ hội tưởng nhớ cuộc chiến của ngài để bảo vệ đất nước khỏi kẻ thù ngoại xâm.",
    "extra": [
      {
        "en": "Visitors come to learn about Vietnamese traditions.",
        "vi": "Du khách đến để tìm hiểu về truyền thống Việt Nam."
      },
      {
        "en": "Families gather to celebrate their cultural heritage.",
        "vi": "Các gia đình tụ họp để tôn vinh di sản văn hóa của họ."
      }
    ]
  },
  {
    "title": "3. Act out + noun",
    "formula": "S + act out + O",
    "desc": "Dùng act out để nói diễn lại một câu chuyện hoặc sự kiện.",
    "example": "During the main ceremony, villagers act out important parts of the old story.",
    "vi": "Trong nghi lễ chính, dân làng diễn lại những phần quan trọng của câu chuyện xưa.",
    "extra": [
      {
        "en": "Villagers act out an old story during the festival.",
        "vi": "Dân làng diễn lại một câu chuyện xưa trong lễ hội."
      },
      {
        "en": "Young performers act out the hero's journey.",
        "vi": "Các diễn viên trẻ diễn lại hành trình của người anh hùng."
      }
    ]
  },
  {
    "title": "4. Present simple with coordinated verbs",
    "formula": "S + V + O, and + V + O",
    "desc": "Dùng các động từ song song để mô tả nhiều hành động của cùng chủ ngữ.",
    "example": "People carry flags, drums, and special objects through the village.",
    "vi": "Mọi người mang cờ, trống và các vật phẩm đặc biệt đi qua làng.",
    "extra": [
      {
        "en": "People sing, dance, and share food together.",
        "vi": "Mọi người hát, múa và cùng chia sẻ thức ăn."
      },
      {
        "en": "Visitors watch performances and join local games.",
        "vi": "Du khách xem biểu diễn và tham gia trò chơi địa phương."
      }
    ]
  },
  {
    "title": "5. Want + to-infinitive",
    "formula": "S + want + to + V",
    "desc": "Dùng want to để nói mong muốn thực hiện một hành động.",
    "example": "It attracts many visitors who want to explore nature and learn about Vietnamese Buddhism.",
    "vi": "Lễ hội thu hút nhiều du khách muốn khám phá thiên nhiên và tìm hiểu về Phật giáo Việt Nam.",
    "extra": [
      {
        "en": "Many visitors want to explore the mountain temples.",
        "vi": "Nhiều du khách muốn khám phá các ngôi đền trên núi."
      },
      {
        "en": "Young people want to learn about old traditions.",
        "vi": "Người trẻ muốn tìm hiểu về những truyền thống xưa."
      }
    ]
  },
  {
    "title": "6. Or for alternatives",
    "formula": "S + V + A + or + B",
    "desc": "Dùng or để đưa ra hai lựa chọn.",
    "example": "People climb Yen Tu Mountain or use a cable car to reach temples and pagodas.",
    "vi": "Mọi người leo núi Yên Tử hoặc đi cáp treo để đến các đền và chùa.",
    "extra": [
      {
        "en": "Visitors can walk or take a cable car.",
        "vi": "Du khách có thể đi bộ hoặc đi cáp treo."
      },
      {
        "en": "People may pray at a temple or a pagoda.",
        "vi": "Mọi người có thể cầu nguyện tại đền hoặc chùa."
      }
    ]
  },
  {
    "title": "7. Past participle phrase",
    "formula": "N + past participle phrase",
    "desc": "Cụm phân từ quá khứ bổ sung thông tin cho danh từ đứng trước.",
    "example": "The most famous place is Dong Pagoda, located near the top.",
    "vi": "Địa điểm nổi tiếng nhất là chùa Đồng, nằm gần đỉnh núi.",
    "extra": [
      {
        "en": "The pagoda, located near the top, is very famous.",
        "vi": "Ngôi chùa, nằm gần đỉnh, rất nổi tiếng."
      },
      {
        "en": "The boats, decorated with flags, look bright.",
        "vi": "Những chiếc thuyền, được trang trí bằng cờ, trông rực rỡ."
      }
    ]
  },
  {
    "title": "8. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả điều du khách có thể làm.",
    "example": "After the ceremony, visitors can watch boat races, folk singing, and traditional dances.",
    "vi": "Sau nghi lễ, du khách có thể xem đua thuyền, hát dân gian và các điệu múa truyền thống.",
    "extra": [
      {
        "en": "Visitors can watch traditional music performances.",
        "vi": "Du khách có thể xem các màn biểu diễn âm nhạc truyền thống."
      },
      {
        "en": "People can learn about local customs at the festival.",
        "vi": "Mọi người có thể tìm hiểu phong tục địa phương tại lễ hội."
      }
    ]
  },
  {
    "title": "9. While + clause",
    "formula": "S + V, while + S + V",
    "desc": "Dùng while để nối hai hành động diễn ra đồng thời.",
    "example": "Elders read prayers, while boats are decorated with bright flags.",
    "vi": "Các bậc cao niên đọc lời cầu nguyện, trong khi thuyền được trang trí bằng những lá cờ rực rỡ.",
    "extra": [
      {
        "en": "Elders pray while visitors watch the ceremony.",
        "vi": "Các bậc cao niên cầu nguyện trong khi du khách xem nghi lễ."
      },
      {
        "en": "Musicians perform while families enjoy the celebration.",
        "vi": "Các nhạc công biểu diễn trong khi các gia đình thưởng thức lễ hội."
      }
    ]
  },
  {
    "title": "10. Between + noun phrases",
    "formula": "N + between + A + and + B",
    "desc": "Dùng between A and B để diễn tả mối quan hệ giữa hai bên.",
    "example": "This festival shows the strong relationship between coastal people and the sea.",
    "vi": "Lễ hội này thể hiện mối quan hệ bền chặt giữa người dân ven biển và biển cả.",
    "extra": [
      {
        "en": "The festival strengthens the relationship between people and nature.",
        "vi": "Lễ hội củng cố mối quan hệ giữa con người và thiên nhiên."
      },
      {
        "en": "There is a strong connection between the village and the sea.",
        "vi": "Có một mối liên hệ bền chặt giữa ngôi làng và biển."
      }
    ]
  }
];
