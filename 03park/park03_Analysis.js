// ===== park03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Many parks have small animals that people enjoy watching every season.",
    "structure": "S + have + O + relative clause",
    "grammar": "Mệnh đề quan hệ với that.",
    "translation": "Nhiều công viên có những động vật nhỏ mà mọi người thích quan sát vào mỗi mùa.",
    "function": "Many parks (chủ ngữ); have (động từ); small animals (tân ngữ); that people enjoy watching every season (mệnh đề quan hệ).",
    "pos": "Many (determiner); parks (noun); have (verb); small (adjective); animals (noun); that (relative pronoun); people (noun); enjoy (verb); watching (gerund); every (determiner); season (noun).",
    "note": ""
  },
  {
    "sentence": "People should watch animals quietly and never frighten them.",
    "structure": "S + should + V + O + and + adverb",
    "grammar": "Should + động từ nguyên mẫu; and nối hai ý.",
    "translation": "Mọi người nên quan sát động vật một cách yên lặng và không bao giờ làm chúng hoảng sợ.",
    "function": "People (chủ ngữ); should watch animals quietly (vị ngữ thứ nhất); and never frighten them (vị ngữ thứ hai).",
    "pos": "People (noun); should (modal verb); watch (verb); animals (noun); quietly (adverb); and (conjunction); never (adverb); frighten (verb); them (pronoun).",
    "note": ""
  },
  {
    "sentence": "Feeding wild animals is sometimes not allowed because it may harm them.",
    "structure": "Gerund phrase + linking verb + complement + because-clause",
    "grammar": "V-ing làm chủ ngữ; may + V trong mệnh đề nguyên nhân.",
    "translation": "Việc cho động vật hoang dã ăn đôi khi không được phép vì có thể gây hại cho chúng.",
    "function": "Feeding wild animals (chủ ngữ dạng V-ing); is sometimes not allowed (vị ngữ bị động); because it may harm them (mệnh đề chỉ nguyên nhân).",
    "pos": "Feeding (gerund); wild (adjective); animals (noun); is (linking verb); sometimes (adverb); not (adverb); allowed (verb); because (conjunction); it (pronoun); may (modal verb); harm (verb); them (pronoun).",
    "note": ""
  },
  {
    "sentence": "Visitors should also protect trees and flowers where animals live safely every day.",
    "structure": "S + should + V + O + where-clause",
    "grammar": "Should + V; mệnh đề quan hệ với where.",
    "translation": "Khách tham quan cũng nên bảo vệ cây và hoa, nơi động vật sống an toàn mỗi ngày.",
    "function": "Visitors (chủ ngữ); should also protect (cụm động từ); trees and flowers (tân ngữ); where animals live safely every day (mệnh đề quan hệ chỉ nơi chốn).",
    "pos": "Visitors (noun); should (modal verb); also (adverb); protect (verb); trees (noun); and (conjunction); flowers (noun); where (relative adverb); animals (noun); live (verb); safely (adverb); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "There is a lovely park near my home in the city.",
    "structure": "There + be + noun phrase + place phrase",
    "grammar": "Cấu trúc There is để giới thiệu sự tồn tại.",
    "translation": "Có một công viên đáng yêu gần nhà tôi trong thành phố.",
    "function": "There is (cấu trúc tồn tại); a lovely park (cụm danh từ); near my home (cụm chỉ vị trí); in the city (cụm chỉ nơi chốn).",
    "pos": "There (adverb); is (linking verb); a (article); lovely (adjective); park (noun); near (preposition); my (possessive determiner); home (noun); in (preposition); the (article); city (noun).",
    "note": ""
  },
  {
    "sentence": "Children play happily while older people exercise with their friends.",
    "structure": "S + V + adverb + while-clause",
    "grammar": "While nối hai hành động đồng thời.",
    "translation": "Trẻ em vui chơi trong khi người lớn tuổi tập thể dục cùng bạn bè.",
    "function": "Children (chủ ngữ); play happily (vị ngữ); while (liên từ); older people exercise with their friends (mệnh đề phụ).",
    "pos": "Children (noun); play (verb); happily (adverb); while (conjunction); older (comparative adjective); people (noun); exercise (noun); with (preposition); their (possessive determiner); friends (noun).",
    "note": ""
  },
  {
    "sentence": "Spring is a wonderful season to visit the park with family and friends.",
    "structure": "S + linking verb + complement + to-infinitive",
    "grammar": "To-infinitive bổ nghĩa và diễn tả mục đích/hoạt động.",
    "translation": "Mùa xuân là một mùa tuyệt vời để đến công viên cùng gia đình và bạn bè.",
    "function": "Spring (chủ ngữ); is (động từ liên kết); a wonderful season (bổ ngữ); to visit the park with family and friends (cụm nguyên mẫu).",
    "pos": "Spring (noun); is (linking verb); a (article); wonderful (adjective); season (noun); to (preposition); visit (verb); the (article); park (noun); with (preposition); family (adverb); and (conjunction); friends (noun).",
    "note": ""
  },
  {
    "sentence": "The weather is warm, flowers bloom beautifully, and green leaves grow everywhere.",
    "structure": "S + linking verb + adjective + coordinated clauses",
    "grammar": "Hiện tại đơn; ba mệnh đề song song nối bằng and.",
    "translation": "Thời tiết ấm áp, hoa nở đẹp và lá xanh mọc khắp nơi.",
    "function": "The weather is warm (mệnh đề thứ nhất); flowers bloom beautifully (mệnh đề thứ hai); and green leaves grow everywhere (mệnh đề thứ ba).",
    "pos": "The (article); weather (noun); is (linking verb); warm (verb); flowers (noun); bloom (verb); beautifully (adverb); and (conjunction); green (adjective); leaves (noun); grow (verb); everywhere (adverb).",
    "note": ""
  },
  {
    "sentence": "The park is my favorite place because it helps me relax.",
    "structure": "S + linking verb + complement + because-clause",
    "grammar": "Because + mệnh đề chỉ nguyên nhân; help + object + V.",
    "translation": "Công viên là nơi yêu thích của tôi vì nó giúp tôi thư giãn.",
    "function": "The park (chủ ngữ); is my favorite place (bổ ngữ); because (liên từ); it helps me relax (mệnh đề chỉ nguyên nhân).",
    "pos": "The (article); park (noun); is (linking verb); my (possessive determiner); favorite (adjective); place (noun); because (conjunction); it (pronoun); helps (verb); me (pronoun); relax (verb).",
    "note": ""
  },
  {
    "sentence": "I feel happy, calm, and healthy whenever I spend time there.",
    "structure": "S + linking verb + adjectives + whenever-clause",
    "grammar": "Whenever + mệnh đề chỉ thời gian lặp lại.",
    "translation": "Tôi cảm thấy vui vẻ, bình tĩnh và khỏe mạnh mỗi khi dành thời gian ở đó.",
    "function": "I (chủ ngữ); feel (động từ liên kết); happy, calm, and healthy (bổ ngữ); whenever I spend time there (mệnh đề thời gian).",
    "pos": "I (pronoun); feel (verb); happy (adjective); calm (adjective); and (conjunction); healthy (adjective); whenever (conjunction); I (pronoun); spend (verb); time (noun); there (adverb).",
    "note": ""
  }
];
