const newAnalysisData = [
  {
    "sentence": "I usually wake up at six o'clock in the morning.",
    "structure": "S + usually + V",
    "grammar": "Dùng usually để nói thói quen thường xuyên.",
    "translation": "Tôi thường thức dậy lúc sáu giờ sáng.",
    "function": "I (chủ ngữ); usually wake up (cụm động từ); at six o'clock (trạng ngữ thời gian); in the morning (trạng ngữ thời gian).",
    "pos": "I (pronoun); usually (adverb); wake (verb); up (adverb); at (preposition); six (number); o'clock (adverb); in (preposition); the (article); morning (gerund/present participle).",
    "note": ""
  },
  {
    "sentence": "After brushing my teeth and washing my face, I have breakfast with my family before going to school.",
    "structure": "After + V-ing, main clause",
    "grammar": "Dùng after + V-ing để nói hành động xảy ra trước một hành động khác.",
    "translation": "Sau khi đánh răng và rửa mặt, tôi ăn sáng với gia đình trước khi đi học.",
    "function": "After brushing my teeth and washing my face (cụm thời gian với V-ing); I (chủ ngữ); have breakfast (vị ngữ); with my family (cụm chỉ người cùng tham gia); before going to school (cụm thời gian).",
    "pos": "After (preposition); brushing (gerund/present participle); my (possessive determiner); teeth (noun); and (conjunction); washing (gerund/present participle); my (possessive determiner); face (noun); I (pronoun); have (verb); breakfast (noun); with (preposition); my (possessive determiner); family (noun); before (preposition); going (gerund/present participle); to (preposition); school (noun).",
    "note": ""
  },
  {
    "sentence": "My classes start at seven o'clock and finish in the afternoon.",
    "structure": "S + V(s) + time phrase",
    "grammar": "Dùng hiện tại đơn để nói lịch trình cố định.",
    "translation": "Các tiết học của tôi bắt đầu lúc bảy giờ và kết thúc vào buổi chiều.",
    "function": "My classes (chủ ngữ); start at seven o'clock (vị ngữ thứ nhất); and finish in the afternoon (vị ngữ song song thứ hai).",
    "pos": "My (possessive determiner); classes (noun); start (verb); at (preposition); seven (number); o'clock (adverb); and (conjunction); finish (verb); in (preposition); the (article); afternoon (noun).",
    "note": ""
  },
  {
    "sentence": "Last summer, I went to the beach with my family for a short vacation.",
    "structure": "S + V2 + complement",
    "grammar": "Dùng quá khứ đơn để kể một trải nghiệm đã xảy ra.",
    "translation": "Mùa hè năm ngoái, tôi đã đi biển cùng gia đình trong một kỳ nghỉ ngắn.",
    "function": "Last summer (trạng ngữ thời gian); I (chủ ngữ); went (động từ quá khứ); to the beach (cụm chỉ hướng); with my family (cụm chỉ người cùng đi); for a short vacation (cụm mục đích/thời lượng).",
    "pos": "Last (adjective); summer (noun); I (pronoun); went (noun); to (preposition); the (article); beach (noun); with (preposition); my (possessive determiner); family (noun); for (preposition); a (article); short (adjective); vacation (noun).",
    "note": ""
  },
  {
    "sentence": "We stayed there for three days and enjoyed many activities such as swimming and taking photos.",
    "structure": "noun + such as + examples",
    "grammar": "Dùng such as để đưa ví dụ.",
    "translation": "Chúng tôi ở đó ba ngày và tận hưởng nhiều hoạt động như bơi lội và chụp ảnh.",
    "function": "We (chủ ngữ); stayed there for three days (vị ngữ thứ nhất); and enjoyed many activities (vị ngữ thứ hai); such as swimming and taking photos (cụm ví dụ).",
    "pos": "We (pronoun); stayed (past participle/verb); there (adverb); for (preposition); three (number); days (noun); and (conjunction); enjoyed (past participle/verb); many (determiner); activities (noun); such (determiner); as (preposition); swimming (gerund/present participle); and (conjunction); taking (gerund/present participle); photos (noun).",
    "note": ""
  },
  {
    "sentence": "It was an unforgettable trip, and I hope to travel more in the future.",
    "structure": "S + hope + to + V",
    "grammar": "Dùng hope + to-infinitive để nói hy vọng tương lai.",
    "translation": "Đó là một chuyến đi khó quên và tôi hy vọng sẽ đi du lịch nhiều hơn trong tương lai.",
    "function": "It (chủ ngữ); was an unforgettable trip (vị ngữ thứ nhất); and I hope to travel more in the future (mệnh đề song song thứ hai).",
    "pos": "It (pronoun); was (linking/auxiliary verb); an (article); unforgettable (adjective); trip (noun); and (conjunction); I (pronoun); hope (noun); to (preposition); travel (verb); more (determiner/adverb); in (preposition); the (article); future (noun).",
    "note": ""
  },
  {
    "sentence": "Students can study online, and workers can complete tasks faster than before.",
    "structure": "comparative adverb + than",
    "grammar": "Dùng so sánh hơn với trạng từ để so sánh cách thực hiện hành động.",
    "translation": "Học sinh có thể học trực tuyến và người lao động có thể hoàn thành nhiệm vụ nhanh hơn trước.",
    "function": "Students (chủ ngữ mệnh đề một); can study online (vị ngữ); and workers (chủ ngữ mệnh đề hai); can complete tasks faster than before (vị ngữ so sánh).",
    "pos": "Students (noun); can (modal verb); study (verb); online (adverb); and (conjunction); workers (noun); can (modal verb); complete (adjective); tasks (noun); faster (adjective); than (conjunction); before (preposition).",
    "note": ""
  },
  {
    "sentence": "Therefore, we should use technology wisely and spend more time exercising and talking with family members.",
    "structure": "S + should + V",
    "grammar": "Dùng should để đưa ra lời khuyên.",
    "translation": "Vì vậy, chúng ta nên sử dụng công nghệ một cách khôn ngoan và dành nhiều thời gian hơn để tập thể dục và trò chuyện với các thành viên gia đình.",
    "function": "Therefore (trạng từ liên kết); we (chủ ngữ); should use technology wisely and spend more time (hai động từ với should); exercising and talking with family members (các cụm V-ing).",
    "pos": "Therefore (adverb); we (pronoun); should (modal verb); use (verb); technology (noun); wisely (adverb); and (conjunction); spend (verb); more (determiner/adverb); time (noun); exercising (gerund/present participle); and (conjunction); talking (gerund/present participle); with (preposition); family (noun); members (noun).",
    "note": ""
  },
  {
    "sentence": "To live healthily, we should eat healthy food and drink enough water every day.",
    "structure": "To + V, S + should + V",
    "grammar": "Dùng to-infinitive đầu câu để nêu mục đích.",
    "translation": "Để sống lành mạnh, chúng ta nên ăn thức ăn tốt cho sức khỏe và uống đủ nước mỗi ngày.",
    "function": "To live healthily (cụm mục đích); we (chủ ngữ); should eat healthy food and drink enough water (hai vị ngữ với should); every day (trạng ngữ thời gian).",
    "pos": "To (preposition); live (verb); healthily (adverb); we (pronoun); should (modal verb); eat (verb); healthy (adjective); food (noun); and (conjunction); drink (verb); enough (determiner/adverb); water (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "We should avoid staying up late and spending too much time online.",
    "structure": "S + should avoid + V-ing",
    "grammar": "Dùng avoid + V-ing để nói nên tránh một hành động.",
    "translation": "Chúng ta nên tránh thức khuya và dành quá nhiều thời gian trên mạng.",
    "function": "We (chủ ngữ); should avoid (modal + động từ); staying up late and spending too much time online (hai cụm V-ing làm bổ ngữ).",
    "pos": "We (pronoun); should (modal verb); avoid (verb); staying (gerund/present participle); up (adverb); late (adjective); and (conjunction); spending (gerund/present participle); too (adverb); much (adverb/determiner); time (noun); online (adverb).",
    "note": ""
  }
];
