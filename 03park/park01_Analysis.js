// ===== park01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "A beautiful park is a peaceful place where people relax and enjoy nature.",
    "structure": "S + linking verb + complement + where-clause",
    "grammar": "Hiện tại đơn; mệnh đề quan hệ với where.",
    "translation": "Một công viên đẹp là nơi yên bình để mọi người thư giãn và tận hưởng thiên nhiên.",
    "function": "A beautiful park (chủ ngữ); is (động từ liên kết); a peaceful place (bổ ngữ); where people relax and enjoy nature (mệnh đề quan hệ chỉ nơi chốn).",
    "pos": "A (article); beautiful (adjective); park (noun); is (linking verb); a (article); peaceful (adjective); place (noun); where (relative adverb); people (noun); relax (verb); and (conjunction); enjoy (verb); nature (noun).",
    "note": ""
  },
  {
    "sentence": "People can walk, jog, ride bicycles, or sit on benches.",
    "structure": "S + modal + coordinated verbs",
    "grammar": "Can + động từ nguyên mẫu; liệt kê các hoạt động song song.",
    "translation": "Mọi người có thể đi bộ, chạy bộ, đi xe đạp hoặc ngồi trên ghế băng.",
    "function": "People (chủ ngữ); can (động từ khuyết thiếu); walk, jog, ride bicycles, or sit on benches (các động từ/cụm động từ song song).",
    "pos": "People (noun); can (modal verb); walk (verb); jog (verb); ride (verb); bicycles (noun); or (conjunction); sit (verb); on (preposition); benches (noun).",
    "note": ""
  },
  {
    "sentence": "Children play on swings and slides while parents watch happily.",
    "structure": "S + V + while-clause",
    "grammar": "Hiện tại đơn; while nối hai hành động xảy ra cùng lúc.",
    "translation": "Trẻ em chơi xích đu và cầu trượt trong khi cha mẹ vui vẻ quan sát.",
    "function": "Children (chủ ngữ); play on swings and slides (mệnh đề chính); while (liên từ); parents watch happily (mệnh đề phụ chỉ thời gian).",
    "pos": "Children (noun); play (verb); on (preposition); swings (noun); and (conjunction); slides (noun); while (conjunction); parents (noun); watch (verb); happily (adverb).",
    "note": ""
  },
  {
    "sentence": "A beautiful park makes the city cleaner and more enjoyable.",
    "structure": "S + make + O + comparative complement",
    "grammar": "Make + object + adjective; so sánh hơn.",
    "translation": "Một công viên đẹp làm cho thành phố sạch hơn và thú vị hơn.",
    "function": "A beautiful park (chủ ngữ); makes (động từ); the city (tân ngữ); cleaner and more enjoyable (bổ ngữ cho tân ngữ).",
    "pos": "A (article); beautiful (adjective); park (noun); makes (verb); the (article); city (noun); cleaner (adjective); and (conjunction); more (adverb); enjoyable (adjective).",
    "note": ""
  },
  {
    "sentence": "People should keep the park clean by using trash bins and protecting nature every day.",
    "structure": "S + should + V + O + by + V-ing",
    "grammar": "Should + động từ nguyên mẫu; by + V-ing chỉ cách thức.",
    "translation": "Mọi người nên giữ công viên sạch sẽ bằng cách sử dụng thùng rác và bảo vệ thiên nhiên mỗi ngày.",
    "function": "People (chủ ngữ); should keep (cụm động từ); the park clean (tân ngữ và bổ ngữ); by using trash bins and protecting nature (cụm chỉ cách thức); every day (trạng ngữ thời gian).",
    "pos": "People (noun); should (modal verb); keep (verb); the (article); park (noun); clean (adjective); by (preposition); using (gerund); trash (noun); bins (noun); and (conjunction); protecting (gerund); nature (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Parks are safe places where families, friends, and neighbors spend time together.",
    "structure": "S + linking verb + complement + where-clause",
    "grammar": "Hiện tại đơn; mệnh đề quan hệ với where.",
    "translation": "Công viên là nơi an toàn để gia đình, bạn bè và hàng xóm dành thời gian bên nhau.",
    "function": "Parks (chủ ngữ); are (động từ liên kết); safe places (bổ ngữ); where families, friends, and neighbors spend time together (mệnh đề quan hệ).",
    "pos": "Parks (noun); are (linking verb); safe (adjective); places (noun); where (relative adverb); families (noun); friends (noun); and (conjunction); neighbors (noun); spend (verb); time (noun); together (adverb).",
    "note": ""
  },
  {
    "sentence": "Spending time outside reduces stress and gives everyone more energy.",
    "structure": "Gerund phrase + V + O + and + V + O",
    "grammar": "V-ing làm chủ ngữ; hai vị ngữ nối bằng and.",
    "translation": "Dành thời gian ngoài trời giúp giảm căng thẳng và mang lại cho mọi người nhiều năng lượng hơn.",
    "function": "Spending time outside (chủ ngữ dạng V-ing); reduces stress (vị ngữ thứ nhất); and gives everyone more energy (vị ngữ thứ hai).",
    "pos": "Spending (gerund); time (noun); outside (adverb); reduces (verb); stress (noun); and (conjunction); gives (verb); everyone (pronoun); more (adverb); energy (noun).",
    "note": ""
  },
  {
    "sentence": "My family enjoys having a picnic in the park on weekends.",
    "structure": "S + enjoy + V-ing + complement",
    "grammar": "Enjoy + V-ing; hiện tại đơn.",
    "translation": "Gia đình tôi thích đi dã ngoại trong công viên vào cuối tuần.",
    "function": "My family (chủ ngữ); enjoys (động từ); having a picnic (tân ngữ dạng V-ing); in the park (nơi chốn); on weekends (thời gian).",
    "pos": "My (possessive determiner); family (adverb); enjoys (verb); having (gerund); a (article); picnic (noun); in (preposition); the (article); park (noun); on (preposition); weekends (noun).",
    "note": ""
  },
  {
    "sentence": "Everyone feels excited because we can spend happy time together outside.",
    "structure": "S + linking verb + adjective + because-clause",
    "grammar": "Because + mệnh đề chỉ nguyên nhân.",
    "translation": "Mọi người đều cảm thấy hào hứng vì chúng tôi có thể vui vẻ dành thời gian bên nhau ngoài trời.",
    "function": "Everyone (chủ ngữ); feels excited (vị ngữ); because (liên từ); we can spend happy time together outside (mệnh đề chỉ nguyên nhân).",
    "pos": "Everyone (pronoun); feels (verb); excited (adjective); because (conjunction); we (pronoun); can (modal verb); spend (verb); happy (adjective); time (noun); together (adverb); outside (adverb).",
    "note": ""
  },
  {
    "sentence": "Before going home, we clean the area carefully and throw all trash into the bins properly.",
    "structure": "Before + V-ing, S + coordinated verbs",
    "grammar": "Before + V-ing; hai động từ chính nối bằng and.",
    "translation": "Trước khi về nhà, chúng tôi dọn sạch khu vực cẩn thận và bỏ toàn bộ rác vào thùng đúng cách.",
    "function": "Before going home (cụm thời gian); we (chủ ngữ); clean the area carefully (vị ngữ thứ nhất); and throw all trash into the bins properly (vị ngữ thứ hai).",
    "pos": "Before (preposition); going (verb); home (noun); we (pronoun); clean (adjective); the (article); area (noun); carefully (adverb); and (conjunction); throw (verb); all (determiner); trash (noun); into (preposition); the (article); bins (noun); properly (adverb).",
    "note": ""
  }
];
