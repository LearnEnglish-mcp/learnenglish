// ===== office03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "A safe workplace protects employees and helps everyone feel comfortable every day.",
    "structure": "S + V(s/es) + complement",
    "grammar": "Present simple for workplace facts.",
    "translation": "Một nơi làm việc an toàn bảo vệ nhân viên và giúp mọi người cảm thấy thoải mái mỗi ngày.",
    "function": "A safe workplace (chủ ngữ); protects employees (vị ngữ thứ nhất); and helps everyone feel comfortable (vị ngữ thứ hai); every day (trạng ngữ thời gian).",
    "pos": "A (article); safe (adjective); workplace (noun); protects (verb); employees (noun); and (conjunction); helps (verb); everyone (pronoun); feel (verb); comfortable (adjective); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Employees should know fire safety procedures and emergency exits.",
    "structure": "S + should + V",
    "grammar": "Should + bare infinitive.",
    "translation": "Nhân viên nên biết các quy trình an toàn phòng cháy và lối thoát hiểm.",
    "function": "Employees (chủ ngữ); should know (cụm động từ với modal should); fire safety procedures and emergency exits (tân ngữ ghép).",
    "pos": "Employees (noun); should (modal verb); know (verb); fire (noun); safety (noun); procedures (noun); and (conjunction); emergency (adjective); exits (noun).",
    "note": ""
  },
  {
    "sentence": "They must use office equipment correctly and report broken machines immediately.",
    "structure": "S + must + V",
    "grammar": "Must + bare infinitive.",
    "translation": "Họ phải sử dụng thiết bị văn phòng đúng cách và báo cáo máy móc bị hỏng ngay lập tức.",
    "function": "They (chủ ngữ); must use office equipment correctly (vị ngữ thứ nhất với modal must); and report broken machines immediately (vị ngữ phối hợp).",
    "pos": "They (pronoun); must (modal verb); use (verb); office (noun); equipment (noun); correctly (adverb); and (conjunction); report (verb); broken (adjective); machines (noun); immediately (adverb).",
    "note": ""
  },
  {
    "sentence": "Keeping desks clean and removing dangerous objects helps prevent injuries and unnecessary workplace problems always.",
    "structure": "V-ing phrase + singular verb",
    "grammar": "Gerund phrase as subject.",
    "translation": "Giữ bàn làm việc sạch sẽ và loại bỏ các vật nguy hiểm giúp ngăn ngừa chấn thương và những vấn đề không cần thiết tại nơi làm việc.",
    "function": "Keeping desks clean and removing dangerous objects (cụm V-ing làm chủ ngữ); helps prevent (cụm động từ); injuries and unnecessary workplace problems (tân ngữ).",
    "pos": "Keeping (gerund); desks (noun); clean (adjective); and (conjunction); removing (gerund); dangerous (adjective); objects (noun); helps (verb); prevent (verb); injuries (noun); and (conjunction); unnecessary (adjective); workplace (noun); problems (noun); always (adverb).",
    "note": ""
  },
  {
    "sentence": "Computers, smartphones, and software help employees organize information, communicate easily, and finish important tasks with greater accuracy and efficiency every single day.",
    "structure": "S + help(s) + O + V",
    "grammar": "Help + object + bare infinitive.",
    "translation": "Máy tính, điện thoại thông minh và phần mềm giúp nhân viên sắp xếp thông tin, giao tiếp dễ dàng và hoàn thành nhiệm vụ quan trọng với độ chính xác và hiệu quả cao hơn mỗi ngày.",
    "function": "Computers, smartphones, and software (chủ ngữ ghép); help (động từ chính); employees (tân ngữ); organize information, communicate easily, and finish important tasks (các động từ nguyên mẫu song song); with greater accuracy and efficiency (cụm giới từ).",
    "pos": "Computers (noun); smartphones (noun); and (conjunction); software (noun); help (verb); employees (noun); organize (verb); information (noun); communicate (verb); easily (adverb); and (conjunction); finish (verb); important (adjective); tasks (noun); with (preposition); greater (comparative adjective); accuracy (noun); and (conjunction); efficiency (noun); every (determiner); single (adjective); day (noun).",
    "note": ""
  },
  {
    "sentence": "Technology saves time and allows people to work with coworkers in different places.",
    "structure": "S + allow(s) + O + to + V",
    "grammar": "Allow + object + to-infinitive.",
    "translation": "Công nghệ tiết kiệm thời gian và cho phép mọi người làm việc với đồng nghiệp ở những nơi khác nhau.",
    "function": "Technology (chủ ngữ); saves time (vị ngữ thứ nhất); and allows people to work with coworkers in different places (vị ngữ thứ hai với allow + O + to V).",
    "pos": "Technology (noun); saves (verb); time (noun); and (conjunction); allows (verb); people (noun); to (infinitive marker); work (verb); with (preposition); coworkers (noun); in (preposition); different (determiner); places (noun).",
    "note": ""
  },
  {
    "sentence": "Problems sometimes happen in every workplace, but good teamwork helps solve them.",
    "structure": "Clause + but + clause",
    "grammar": "But for contrast.",
    "translation": "Đôi khi vấn đề xảy ra ở mọi nơi làm việc, nhưng tinh thần làm việc nhóm tốt giúp giải quyết chúng.",
    "function": "Problems (chủ ngữ mệnh đề thứ nhất); sometimes happen in every workplace (vị ngữ thứ nhất); but (liên từ tương phản); good teamwork (chủ ngữ mệnh đề thứ hai); helps solve them (vị ngữ thứ hai).",
    "pos": "Problems (noun); sometimes (adverb); happen (verb); in (preposition); every (determiner); workplace (noun); but (conjunction); good (adjective); teamwork (noun); helps (verb); solve (verb); them (pronoun).",
    "note": ""
  },
  {
    "sentence": "Managers listen to different opinions before making decisions.",
    "structure": "before + V-ing / before + noun phrase",
    "grammar": "Before + V-ing.",
    "translation": "Các quản lý lắng nghe những ý kiến khác nhau trước khi đưa ra quyết định.",
    "function": "Managers (chủ ngữ); listen to different opinions (động từ + cụm giới từ); before making decisions (cụm before + V-ing chỉ thời gian).",
    "pos": "Managers (noun); listen (verb); to (preposition); different (determiner); opinions (noun); before (preposition); making (gerund); decisions (noun).",
    "note": ""
  },
  {
    "sentence": "People enjoy working together and support each other whenever help is needed.",
    "structure": "S + V + whenever + S + V",
    "grammar": "Whenever + clause.",
    "translation": "Mọi người thích làm việc cùng nhau và hỗ trợ nhau bất cứ khi nào cần giúp đỡ.",
    "function": "People (chủ ngữ); enjoy working together and support each other (hai vị ngữ phối hợp); whenever (liên từ); help is needed (mệnh đề bị động chỉ thời điểm).",
    "pos": "People (noun); enjoy (verb); working (gerund); together (adverb); and (conjunction); support (verb); each (determiner); other (determiner); whenever (conjunction); help (verb); is (auxiliary verb); needed (adjective).",
    "note": ""
  },
  {
    "sentence": "A positive workplace benefits both employees and the company.",
    "structure": "both + noun A + and + noun B",
    "grammar": "Both A and B.",
    "translation": "Một nơi làm việc tích cực mang lại lợi ích cho cả nhân viên và công ty.",
    "function": "A positive workplace (chủ ngữ); benefits (động từ chính); both employees and the company (tân ngữ với cấu trúc both A and B).",
    "pos": "A (article); positive (adjective); workplace (noun); benefits (verb); both (determiner); employees (noun); and (conjunction); the (article); company (noun).",
    "note": ""
  }
];
