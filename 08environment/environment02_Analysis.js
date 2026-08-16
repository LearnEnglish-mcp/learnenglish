// ===== environment02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Water pollution occurs when waste, chemicals, oil, or plastic enter rivers, lakes, and oceans.",
    "structure": "S + V + when + S + V",
    "grammar": "Dùng when để nói khi nào một việc xảy ra.",
    "translation": "Ô nhiễm nước xảy ra khi rác thải, hóa chất, dầu hoặc nhựa đi vào sông, hồ và đại dương.",
    "function": "Water pollution (chủ ngữ); occurs (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); when waste chemicals oil or plastic enter rivers lakes and oceans (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Water (noun); pollution (noun); occurs (noun); when (conjunction); waste (noun); chemicals (noun); oil (noun); or (conjunction); plastic (adjective); enter (verb); rivers (noun); lakes (noun); and (conjunction); oceans (noun).",
    "note": ""
  },
  {
    "sentence": "Dirty water can come from factories, farms, homes, and careless littering.",
    "structure": "S + can come from + N",
    "grammar": "Dùng can come from để nói nguồn gốc có thể có.",
    "translation": "Nước bẩn có thể đến từ nhà máy, trang trại, nhà ở và việc xả rác bất cẩn.",
    "function": "Dirty water (chủ ngữ); can (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); come from factories farms homes and careless littering (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Dirty (adjective); water (noun); can (modal verb); come (verb); from (preposition); factories (noun); farms (noun); homes (noun); and (conjunction); careless (adjective); littering (verb).",
    "note": ""
  },
  {
    "sentence": "It can also make people sick when they drink or use unsafe water.",
    "structure": "S + can make + O + Adj",
    "grammar": "Dùng make + tân ngữ + tính từ để diễn tả trạng thái được gây ra.",
    "translation": "Nó cũng có thể khiến con người bị bệnh khi họ uống hoặc sử dụng nước không an toàn.",
    "function": "It (chủ ngữ); can (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); also make people sick when they drink or use unsafe water (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "It (pronoun); can (modal verb); also (adverb); make (verb); people (noun); sick (adjective); when (conjunction); they (pronoun); drink (verb); or (conjunction); use (verb); unsafe (adjective); water (noun).",
    "note": ""
  },
  {
    "sentence": "We should never throw rubbish into drains, rivers, or beaches.",
    "structure": "S + should never + V",
    "grammar": "Dùng should never để đưa ra lời khuyên mạnh.",
    "translation": "Chúng ta không bao giờ nên vứt rác vào cống, sông hoặc bãi biển.",
    "function": "We (chủ ngữ); should (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); never throw rubbish into drains rivers or beaches (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "We (pronoun); should (modal verb); never (adverb); throw (verb); rubbish (noun); into (preposition); drains (noun); rivers (noun); or (conjunction); beaches (noun).",
    "note": ""
  },
  {
    "sentence": "Governments and companies must treat dirty water before releasing it.",
    "structure": "S + must + V",
    "grammar": "Dùng must để diễn tả nghĩa vụ bắt buộc.",
    "translation": "Chính phủ và các công ty phải xử lý nước bẩn trước khi xả ra ngoài.",
    "function": "Governments and companies (chủ ngữ); must (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); treat dirty water before releasing it (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Governments (noun); and (conjunction); companies (noun); must (modal verb); treat (verb); dirty (adjective); water (noun); before (preposition); releasing (verb); it (pronoun).",
    "note": ""
  },
  {
    "sentence": "Protecting water means protecting life, health, and the future of our communities.",
    "structure": "S + mean(s) + V-ing",
    "grammar": "Dùng mean + V-ing để giải thích ý nghĩa của hành động.",
    "translation": "Bảo vệ nước có nghĩa là bảo vệ sự sống, sức khỏe và tương lai của cộng đồng.",
    "function": "Protecting water (chủ ngữ); means (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); protecting life health and the future of our communities (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Protecting (verb); water (noun); means (verb); protecting (verb); life (noun); health (noun); and (conjunction); the (article); future (noun); of (preposition); our (determiner); communities (noun).",
    "note": ""
  },
  {
    "sentence": "Plastic is useful, but too much plastic waste causes environmental problems.",
    "structure": "too much + N",
    "grammar": "Dùng too much trước danh từ không đếm được.",
    "translation": "Nhựa hữu ích, nhưng quá nhiều rác thải nhựa gây ra các vấn đề môi trường.",
    "function": "Plastic (chủ ngữ); is (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); useful but too much plastic waste causes environmental problems (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Plastic (adjective); is (linking verb); useful (adjective); but (conjunction); too (adverb); much (adverb); plastic (adjective); waste (noun); causes (verb); environmental (adjective); problems (noun).",
    "note": ""
  },
  {
    "sentence": "Plastic waste often reaches rivers and oceans, where animals may eat it or become trapped.",
    "structure": "N + where + S + V",
    "grammar": "Dùng where để bổ sung thông tin về địa điểm.",
    "translation": "Rác thải nhựa thường trôi ra sông và đại dương, nơi động vật có thể ăn phải hoặc bị mắc kẹt.",
    "function": "Plastic waste often reaches rivers and oceans where animals (chủ ngữ); may (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); eat it or become trapped (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Plastic (adjective); waste (noun); often (adverb); reaches (noun); rivers (noun); and (conjunction); oceans (noun); where (adverb); animals (noun); may (modal verb); eat (verb); it (pronoun); or (conjunction); become (verb); trapped (adjective).",
    "note": ""
  },
  {
    "sentence": "Recycling means turning used materials into new products instead of throwing them away.",
    "structure": "instead of + V-ing",
    "grammar": "Dùng instead of + V-ing để nói làm việc này thay cho việc khác.",
    "translation": "Tái chế có nghĩa là biến vật liệu đã sử dụng thành sản phẩm mới thay vì vứt bỏ.",
    "function": "Recycling (chủ ngữ); means (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); turning used materials into new products instead of throwing them away (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Recycling (verb); means (verb); turning (verb); used (verb); materials (noun); into (preposition); new (adjective); products (noun); instead (adverb); of (preposition); throwing (verb); them (noun); away (adverb).",
    "note": ""
  },
  {
    "sentence": "Before recycling, items should be clean and placed in the correct container.",
    "structure": "Before + V-ing, S + V",
    "grammar": "Dùng before + V-ing để nói một việc xảy ra trước việc khác.",
    "translation": "Trước khi tái chế, các vật dụng nên được làm sạch và đặt vào đúng thùng.",
    "function": "Before (chủ ngữ); recycling (động từ chính/động từ liên kết hoặc khuyết thiếu theo ngữ cảnh); items should be clean and placed in the correct container (phần vị ngữ còn lại gồm tân ngữ, bổ ngữ và/hoặc trạng ngữ của câu).",
    "pos": "Before (preposition); recycling (verb); items (noun); should (modal verb); be (verb); clean (adjective); and (conjunction); placed (verb); in (preposition); the (article); correct (verb); container (noun).",
    "note": ""
  }
];
