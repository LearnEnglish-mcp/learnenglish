// ===== food01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Street food is popular in many countries around the world.",
    "structure": "S + V(s/es) + complement",
    "grammar": "Dùng hiện tại đơn để nêu sự thật hoặc đặc điểm chung.",
    "translation": "Đồ ăn đường phố phổ biến ở nhiều quốc gia trên thế giới.",
    "function": "Street food (chủ ngữ); is (động từ liên kết); popular (bổ ngữ tính từ); in many countries around the world (cụm giới từ chỉ phạm vi).",
    "pos": "Street (noun); food (noun); is (linking verb); popular (adjective); in (preposition); many (determiner); countries (noun); around (preposition); the (article); world (noun).",
    "note": ""
  },
  {
    "sentence": "People enjoy eating quick, tasty meals from small food stalls or carts.",
    "structure": "S + enjoy(s) + V-ing + O",
    "grammar": "Dùng enjoy với V-ing để nói thích làm một hoạt động.",
    "translation": "Mọi người thích ăn những bữa ăn nhanh và ngon từ các quầy hoặc xe bán đồ ăn nhỏ.",
    "function": "People (chủ ngữ); enjoy (động từ chính); eating quick, tasty meals (cụm V-ing làm tân ngữ); from small food stalls or carts (cụm giới từ chỉ nguồn).",
    "pos": "People (noun); enjoy (verb); eating (gerund); quick (adjective); tasty (adjective); meals (noun); from (preposition); small (adjective); food (noun); stalls (noun); or (conjunction); carts (noun).",
    "note": ""
  },
  {
    "sentence": "Popular street foods include sandwiches, noodles, grilled meat, fried rice, and fresh fruit.",
    "structure": "S + include(s) + noun(s)",
    "grammar": "Dùng include để liệt kê những thứ thuộc một nhóm.",
    "translation": "Những món ăn đường phố phổ biến gồm bánh mì kẹp, mì, thịt nướng, cơm chiên và trái cây tươi.",
    "function": "Popular street foods (chủ ngữ); include (động từ chính); sandwiches, noodles, grilled meat, fried rice, and fresh fruit (tân ngữ liệt kê).",
    "pos": "Popular (adjective); street (noun); foods (noun); include (verb); sandwiches (noun); noodles (noun); grilled (adjective); meat (noun); fried (adjective); rice (noun); and (conjunction); fresh (adjective); fruit (noun).",
    "note": ""
  },
  {
    "sentence": "They can eat while walking or sitting nearby.",
    "structure": "S + can + V",
    "grammar": "Dùng can với động từ nguyên mẫu để nói về khả năng hoặc lựa chọn.",
    "translation": "Họ có thể ăn trong khi đi bộ hoặc ngồi gần đó.",
    "function": "They (chủ ngữ); can eat (động từ khuyết thiếu và động từ chính); while walking or sitting nearby (cụm chỉ hai hoạt động đồng thời).",
    "pos": "They (pronoun); can (modal verb); eat (verb); while (conjunction); walking (gerund); or (conjunction); sitting (gerund); nearby (adverb).",
    "note": ""
  },
  {
    "sentence": "It brings people together and lets visitors enjoy traditional flavors.",
    "structure": "S + let(s) + O + V",
    "grammar": "Dùng let với tân ngữ và động từ nguyên mẫu để diễn tả cho phép ai làm gì.",
    "translation": "Nó gắn kết mọi người và cho phép du khách thưởng thức những hương vị truyền thống.",
    "function": "It (chủ ngữ); brings people together (vị ngữ thứ nhất); and (liên từ); lets visitors enjoy traditional flavors (vị ngữ thứ hai với cấu trúc let + O + V).",
    "pos": "It (pronoun); brings (verb); people (noun); together (adverb); and (conjunction); lets (verb); visitors (noun); enjoy (verb); traditional (adjective); flavors (noun).",
    "note": ""
  },
  {
    "sentence": "People visit food stalls when they feel hungry or want a quick meal.",
    "structure": "S + V + when + S + V",
    "grammar": "Dùng when để chỉ thời điểm hoặc tình huống một hành động xảy ra.",
    "translation": "Mọi người ghé các quầy đồ ăn khi họ cảm thấy đói hoặc muốn một bữa ăn nhanh.",
    "function": "People (chủ ngữ); visit food stalls (mệnh đề chính); when (liên từ); they feel hungry or want a quick meal (mệnh đề phụ chỉ thời điểm/tình huống).",
    "pos": "People (noun); visit (verb); food (noun); stalls (noun); when (conjunction); they (pronoun); feel (verb); hungry (adjective); or (conjunction); want (verb); a (article); quick (adjective); meal (noun).",
    "note": ""
  },
  {
    "sentence": "Customers usually wait only a few minutes before receiving their meals.",
    "structure": "S + V + before + V-ing",
    "grammar": "Dùng before + V-ing để nói một hành động xảy ra trước một hành động khác.",
    "translation": "Khách hàng thường chỉ chờ vài phút trước khi nhận bữa ăn của mình.",
    "function": "Customers (chủ ngữ); usually wait (động từ chính kèm trạng từ tần suất); only a few minutes (cụm chỉ thời gian); before receiving their meals (cụm V-ing sau before).",
    "pos": "Customers (noun); usually (adverb); wait (verb); only (adverb); a (article); few (noun); minutes (noun); before (preposition); receiving (gerund); their (possessive determiner); meals (noun).",
    "note": ""
  },
  {
    "sentence": "It is a good choice for busy people who want tasty food without spending too much money.",
    "structure": "S + V + without + V-ing",
    "grammar": "Dùng without + V-ing để diễn tả làm việc gì mà không thực hiện hành động khác.",
    "translation": "Đây là lựa chọn tốt cho những người bận rộn muốn món ăn ngon mà không phải tiêu quá nhiều tiền.",
    "function": "It (chủ ngữ); is (động từ liên kết); a good choice (bổ ngữ); for busy people (cụm giới từ); who want tasty food without spending too much money (mệnh đề quan hệ).",
    "pos": "It (pronoun); is (linking verb); a (article); good (adjective); choice (noun); for (preposition); busy (adjective); people (noun); who (relative pronoun); want (verb); tasty (adjective); food (noun); without (preposition); spending (gerund); too (adverb); much (adverb); money (noun).",
    "note": ""
  },
  {
    "sentence": "I like eating it because it has a wonderful smell and rich flavor.",
    "structure": "S + V + because + S + V",
    "grammar": "Dùng because để đưa ra lý do.",
    "translation": "Tôi thích ăn món này vì nó có mùi thơm tuyệt vời và hương vị đậm đà.",
    "function": "I (chủ ngữ); like eating it (vị ngữ); because (liên từ); it has a wonderful smell and rich flavor (mệnh đề chỉ lý do).",
    "pos": "I (pronoun); like (noun); eating (gerund); it (pronoun); because (conjunction); it (pronoun); has (verb); a (article); wonderful (adjective); smell (verb); and (conjunction); rich (adjective); flavor (noun).",
    "note": ""
  },
  {
    "sentence": "I usually buy this meal from a friendly street food seller near my school.",
    "structure": "S + usually/always/never + V",
    "grammar": "Dùng trạng từ tần suất để nói mức độ thường xuyên của một hành động.",
    "translation": "Tôi thường mua bữa ăn này từ một người bán đồ ăn đường phố thân thiện gần trường.",
    "function": "I (chủ ngữ); usually buy (động từ chính kèm trạng từ tần suất); this meal (tân ngữ); from a friendly street food seller (cụm giới từ chỉ nguồn); near my school (cụm giới từ chỉ vị trí).",
    "pos": "I (pronoun); usually (adverb); buy (verb); this (determiner); meal (noun); from (preposition); a (article); friendly (adjective); street (noun); food (noun); seller (noun); near (preposition); my (possessive determiner); school (noun).",
    "note": ""
  }
];
