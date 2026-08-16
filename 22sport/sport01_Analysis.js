const newAnalysisData = [
  {
    "sentence": "Many people love sports because they are fun and healthy.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để nêu nguyên nhân.",
    "translation": "Nhiều người yêu thích thể thao vì chúng vui và tốt cho sức khỏe.",
    "function": "Many people (chủ ngữ); love sports (vị ngữ); because they are fun and healthy (mệnh đề nguyên nhân).",
    "pos": "Many (determiner/number); people (noun); love (verb); sports (noun); because (conjunction); they (pronoun); are (linking/auxiliary verb); fun (adjective); and (conjunction); healthy (adjective).",
    "note": ""
  },
  {
    "sentence": "Some play football, while others swim or ride bikes.",
    "structure": "Clause + while + clause",
    "grammar": "Dùng while để đối chiếu hai hoạt động hoặc nhóm người.",
    "translation": "Một số người chơi bóng đá, trong khi những người khác bơi hoặc đi xe đạp.",
    "function": "Some (chủ ngữ mệnh đề một); play football (vị ngữ); while others (chủ ngữ mệnh đề hai); swim or ride bikes (vị ngữ).",
    "pos": "Some (pronoun); play (verb); football (noun); while (conjunction); others (pronoun); swim (verb); or (conjunction); ride (noun); bikes (noun).",
    "note": ""
  },
  {
    "sentence": "Some students are playing basketball now.",
    "structure": "S + be + V-ing",
    "grammar": "Dùng hiện tại tiếp diễn để mô tả hành động đang diễn ra.",
    "translation": "Một số học sinh đang chơi bóng rổ lúc này.",
    "function": "Some students (chủ ngữ); are playing (hiện tại tiếp diễn); basketball (tân ngữ); now (trạng ngữ thời gian).",
    "pos": "Some (pronoun); students (noun); are (linking/auxiliary verb); playing (gerund/present participle); basketball (noun); now (adverb).",
    "note": ""
  },
  {
    "sentence": "Last weekend, my family joined a sports festival.",
    "structure": "S + V2 + object",
    "grammar": "Dùng quá khứ đơn để kể sự kiện đã xảy ra.",
    "translation": "Cuối tuần trước, gia đình tôi tham gia một lễ hội thể thao.",
    "function": "Last weekend (trạng ngữ thời gian); my family (chủ ngữ); joined (động từ quá khứ); a sports festival (tân ngữ).",
    "pos": "Last (adjective); weekend (noun); my (possessive determiner); family (noun); joined (past participle/verb); a (article); sports (noun); festival (adjective).",
    "note": ""
  },
  {
    "sentence": "I have already learned that sports help people become stronger and happier.",
    "structure": "S + have/has already + V3",
    "grammar": "Dùng hiện tại hoàn thành với already để nói kết quả đã có.",
    "translation": "Tôi đã nhận ra rằng thể thao giúp con người trở nên khỏe mạnh và vui vẻ hơn.",
    "function": "I (chủ ngữ); have already learned (hiện tại hoàn thành); that sports help people become stronger and happier (mệnh đề tân ngữ).",
    "pos": "I (pronoun); have (auxiliary/verb); already (adverb); learned (past participle/verb); that (relative pronoun); sports (noun); help (verb); people (noun); become (verb); stronger (adjective); and (conjunction); happier (adjective).",
    "note": ""
  },
  {
    "sentence": "Next month, our class is going to have another sports day.",
    "structure": "S + be going to + V",
    "grammar": "Dùng be going to để nói kế hoạch tương lai.",
    "translation": "Tháng tới, lớp chúng tôi sẽ có một ngày hội thể thao khác.",
    "function": "Next month (trạng ngữ thời gian); our class (chủ ngữ); is going to have (cấu trúc tương lai dự định); another sports day (tân ngữ).",
    "pos": "Next (adjective); month (noun); our (possessive determiner); class (noun); is (linking/auxiliary verb); going (gerund/present participle); to (preposition); have (auxiliary/verb); another (determiner/number); sports (noun); day (noun).",
    "note": ""
  },
  {
    "sentence": "I will join the football team again.",
    "structure": "S + will + V",
    "grammar": "Dùng will để nói quyết định hoặc dự đoán tương lai.",
    "translation": "Tôi sẽ lại tham gia đội bóng đá.",
    "function": "I (chủ ngữ); will join (tương lai đơn); the football team (tân ngữ); again (trạng từ).",
    "pos": "I (pronoun); will (modal verb); join (verb); the (article); football (noun); team (noun); again (adverb).",
    "note": ""
  },
  {
    "sentence": "If the weather is nice, we will play outside.",
    "structure": "If + present simple, S + will + V",
    "grammar": "Dùng câu điều kiện loại 1 để nói kết quả có thể xảy ra.",
    "translation": "Nếu thời tiết đẹp, chúng tôi sẽ chơi bên ngoài.",
    "function": "If the weather is nice (mệnh đề điều kiện); we (chủ ngữ mệnh đề chính); will play (tương lai đơn); outside (trạng từ nơi chốn).",
    "pos": "If (conjunction); the (article); weather (noun); is (linking/auxiliary verb); nice (adjective); we (pronoun); will (modal verb); play (verb); outside (adverb).",
    "note": ""
  },
  {
    "sentence": "Football is one of the most popular sports in the world.",
    "structure": "S + be + one of the most + adjective + plural noun",
    "grammar": "Dùng one of the most để nói một trong những đối tượng nổi bật nhất.",
    "translation": "Bóng đá là một trong những môn thể thao phổ biến nhất trên thế giới.",
    "function": "Football (chủ ngữ); is (động từ liên kết); one of the most popular sports (bổ ngữ so sánh nhất); in the world (cụm nơi chốn).",
    "pos": "Football (noun); is (linking/auxiliary verb); one (determiner/number); of (preposition); the (article); most (determiner/number); popular (adjective); sports (noun); in (preposition); the (article); world (noun).",
    "note": ""
  },
  {
    "sentence": "Last year, I could not swim well, but I practiced every weekend.",
    "structure": "S + could not + V",
    "grammar": "Dùng could not để nói không có khả năng trong quá khứ.",
    "translation": "Năm ngoái, tôi không thể bơi tốt, nhưng tôi đã luyện tập mỗi cuối tuần.",
    "function": "Last year (trạng ngữ thời gian); I (chủ ngữ); could not swim well (modal quá khứ phủ định); but I practiced every weekend (mệnh đề tương phản).",
    "pos": "Last (adjective); year (noun); I (pronoun); could (modal verb); not (adverb); swim (verb); well (adverb); but (conjunction); I (pronoun); practiced (past participle/verb); every (determiner/number); weekend (noun).",
    "note": ""
  }
];
