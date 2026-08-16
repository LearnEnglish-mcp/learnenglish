// ===== traffic02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Rush hour is the busiest time of the day in many cities.",
    "structure": "S + linking verb + superlative noun complement",
    "grammar": "So sánh nhất với the.",
    "translation": "Giờ cao điểm là thời gian bận rộn nhất trong ngày ở nhiều thành phố.",
    "function": "Rush hour (chủ ngữ); is (động từ liên kết); the busiest time (bổ ngữ); of the day in many cities (cụm giới từ bổ nghĩa).",
    "pos": "Rush (noun); hour (noun); is (noun); the (article); busiest (superlative adjective); time (noun); of (preposition); the (article); day (noun); in (preposition); many (determiner); cities (noun).",
    "note": ""
  },
  {
    "sentence": "Traffic moves slowly because many vehicles travel together at once.",
    "structure": "Main clause + because-clause",
    "grammar": "Hiện tại đơn; because chỉ nguyên nhân.",
    "translation": "Giao thông di chuyển chậm vì nhiều phương tiện cùng đi một lúc.",
    "function": "Traffic (chủ ngữ mệnh đề chính); moves slowly (động từ và trạng từ); because (liên từ); many vehicles (chủ ngữ mệnh đề phụ); travel together at once (vị ngữ mệnh đề phụ).",
    "pos": "Traffic (noun); moves (verb); slowly (adverb); because (conjunction); many (determiner); vehicles (noun); travel (verb); together (adverb); at (preposition); once (adverb).",
    "note": ""
  },
  {
    "sentence": "They should stay calm, keep safe distances, and obey traffic lights carefully.",
    "structure": "S + modal + three coordinated verbs",
    "grammar": "Should + ba động từ nguyên mẫu song song.",
    "translation": "Họ nên giữ bình tĩnh, giữ khoảng cách an toàn và tuân thủ đèn giao thông cẩn thận.",
    "function": "They (chủ ngữ); should stay calm (vị ngữ thứ nhất); keep safe distances (vị ngữ thứ hai); and obey traffic lights carefully (vị ngữ thứ ba).",
    "pos": "They (pronoun); should (modal verb); stay (verb); calm (adjective); keep (verb); safe (adjective); distances (noun); and (conjunction); obey (verb); traffic (noun); lights (noun); carefully (adverb).",
    "note": ""
  },
  {
    "sentence": "Listening to traffic reports helps people choose better routes before leaving home.",
    "structure": "Gerund phrase S + help + O + V + before V-ing",
    "grammar": "V-ing làm chủ ngữ; help + object + bare infinitive; before + V-ing.",
    "translation": "Nghe báo cáo giao thông giúp mọi người chọn tuyến đường tốt hơn trước khi rời nhà.",
    "function": "Listening to traffic reports (chủ ngữ); helps (động từ chính); people (tân ngữ); choose better routes (bổ ngữ động từ); before leaving home (trạng ngữ thời gian).",
    "pos": "Listening (verb); to (preposition); traffic (noun); reports (noun); helps (verb); people (noun); choose (verb); better (adjective); routes (noun); before (preposition); leaving (verb); home (noun).",
    "note": ""
  },
  {
    "sentence": "Crossing the road safely is an important skill for everyone.",
    "structure": "Gerund phrase S + linking verb + noun complement",
    "grammar": "V-ing làm chủ ngữ.",
    "translation": "Băng qua đường an toàn là một kỹ năng quan trọng đối với mọi người.",
    "function": "Crossing the road safely (cụm danh động từ làm chủ ngữ); is (động từ liên kết); an important skill (bổ ngữ); for everyone (cụm giới từ).",
    "pos": "Crossing (noun); the (article); road (noun); safely (adverb); is (noun); an (article); important (adjective); skill (noun); for (preposition); everyone (pronoun).",
    "note": ""
  },
  {
    "sentence": "Never run across busy roads or use mobile phones while walking through traffic areas.",
    "structure": "Negative imperative + coordinated verbs + while phrase",
    "grammar": "Câu mệnh lệnh phủ định với never; while + V-ing.",
    "translation": "Không bao giờ chạy băng qua những con đường đông đúc hoặc dùng điện thoại di động khi đi bộ qua khu vực giao thông.",
    "function": "Never (trạng từ phủ định); run across busy roads (động từ mệnh lệnh thứ nhất); or use mobile phones (động từ song song); while walking through traffic areas (trạng ngữ).",
    "pos": "Never (adverb); run (verb); across (preposition); busy (adjective); roads (noun); or (conjunction); use (verb); mobile (adjective); phones (noun); while (conjunction); walking (verb); through (preposition); traffic (noun); areas (noun).",
    "note": ""
  },
  {
    "sentence": "Safe crossing helps prevent accidents and injuries every day.",
    "structure": "S + help + V + coordinated O + time",
    "grammar": "Help + động từ nguyên mẫu.",
    "translation": "Băng qua đường an toàn giúp ngăn ngừa tai nạn và thương tích mỗi ngày.",
    "function": "Safe crossing (chủ ngữ); helps prevent (cụm động từ); accidents and injuries (tân ngữ ghép); every day (trạng ngữ thời gian).",
    "pos": "Safe (adjective); crossing (noun); helps (verb); prevent (verb); accidents (noun); and (conjunction); injuries (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Riding a bicycle is a healthy and enjoyable way to travel.",
    "structure": "Gerund phrase S + linking verb + noun complement + to-infinitive",
    "grammar": "V-ing làm chủ ngữ; to-infinitive bổ nghĩa cho way.",
    "translation": "Đi xe đạp là một cách di chuyển lành mạnh và thú vị.",
    "function": "Riding a bicycle (chủ ngữ); is (động từ liên kết); a healthy and enjoyable way (bổ ngữ); to travel (cụm nguyên mẫu bổ nghĩa).",
    "pos": "Riding (verb); a (article); bicycle (noun); is (noun); a (article); healthy (adjective); and (conjunction); enjoyable (adjective); way (noun); to (preposition); travel (verb).",
    "note": ""
  },
  {
    "sentence": "They must follow traffic signs, use hand signals, and stay in bicycle lanes whenever possible.",
    "structure": "S + modal + three coordinated verbs + whenever phrase",
    "grammar": "Must + động từ nguyên mẫu; whenever possible.",
    "translation": "Họ phải tuân theo biển báo giao thông, dùng tín hiệu tay và đi trong làn xe đạp bất cứ khi nào có thể.",
    "function": "They (chủ ngữ); must follow traffic signs (vị ngữ thứ nhất); use hand signals (vị ngữ thứ hai); and stay in bicycle lanes (vị ngữ thứ ba); whenever possible (trạng ngữ).",
    "pos": "They (pronoun); must (modal verb); follow (verb); traffic (noun); signs (noun); use (verb); hand (noun); signals (noun); and (conjunction); stay (verb); in (preposition); bicycle (noun); lanes (noun); whenever (conjunction); possible (adjective).",
    "note": ""
  },
  {
    "sentence": "Bright clothes help drivers see cyclists more easily.",
    "structure": "S + help + O + bare infinitive + adverb",
    "grammar": "Help + object + bare infinitive.",
    "translation": "Quần áo sáng màu giúp người lái xe nhìn thấy người đi xe đạp dễ dàng hơn.",
    "function": "Bright clothes (chủ ngữ); help (động từ chính); drivers (tân ngữ); see cyclists (động từ nguyên mẫu và tân ngữ); more easily (trạng từ so sánh).",
    "pos": "Bright (adjective); clothes (noun); help (verb); drivers (noun); see (verb); cyclists (noun); more (determiner); easily (adverb).",
    "note": ""
  }
];
