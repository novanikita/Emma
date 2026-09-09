# Лог покрытых тем (для дедупликации между пачками)

Формат: № в пачке — тема/компания — URL — слой источника (см. sources/*.md)

## Пачка 1 (2026-09-09, sources/raw/2026-09-09-batch-1.md)

1. Закрытие AI-компаньона Dot (New Computer) — https://techcrunch.com/2025/09/05/personalized-ai-companion-app-dot-is-shutting-down — слой 2 (TechCrunch)
2. Массовое отключение AI-компаньонов в Китае (Tencent Yuanbao, ByteDance Doubao, Alibaba Qwen) — https://www.techtimes.com/articles/320525/20260715/china-ai-companion-law-takes-effect-doubao-qwen-shut-down-millions-lose-chat-data.htm — слой 2
3. Sesame AI (Maya/Miles, CSM модель, a16z раунд) — https://techcrunch.com/2025/03/13/sesame-the-startup-behind-the-viral-virtual-assistant-maya-releases-its-base-ai-model/ — слой 2
4. Full-duplex синхронизация представлений в диалоге (модель Moshi) — https://arxiv.org/abs/2605.20356 — слой 3 (arXiv)
5. HumDial Challenge ICASSP 2026 (turn-taking бенчмарк) — https://arxiv.org/abs/2604.21406 — слой 3
6. Klarna + ElevenLabs голосовой агент поддержки (10x ускорение) — https://elevenlabs.io/blog/klarna — слой 5 (ElevenLabs)
7. Stanford HAI: AI-компаньоны и одиночество уязвимых пользователей — https://hai.stanford.edu/news/ai-companions-may-worsen-loneliness-for-vulnerable-users-stanford-study-finds — слой 3
8. Stanford AI Index 2026: мировой энтузиазм к AI-компаньонам — https://hai.stanford.edu/ai-index/2026-ai-index-report/public-opinion — слой 3
9. ElevenLabs Conversational AI 2.0 (turn-taking модель, Eleven v3 TTS) — https://elevenlabs.io/blog/conversational-ai-2-0 — слой 5
10. Почему голосовые агенты проваливаются (недоверие, нельзя перебить) — https://medium.com/@R.H_Rizvi/why-your-ai-voice-agent-will-fail-and-it-has-nothing-to-do-with-the-technology-e59614034794 — слой 7 (мнение)
11. Mymeet.ai — RU голосовой бот-ассистент встреч, раунд 16.5М₽ — https://vc.ru/growth/3072868-startapy-udivivshie-venchurnyj-rynok — слой 6 (VC.ru)
12. Sycophancy у AI-компаньонов снижает вовлечённость (IJHCI, 636 респондентов) — https://www.tandfonline.com/doi/full/10.1080/10447318.2026.2626809 — слой 3

**Итого покрыто слоёв:** 2, 3, 5, 6, 7. **Ещё не покрыты:** 1 (Voicebot.ai/Synthedia/Speech Technology Magazine/VoiceAISpace/INTERSPEECH), 4 (первичка OpenAI/DeepMind/Anthropic/Microsoft Research).

**Компании/темы, уже покрытые — не дублировать:** Dot/New Computer, Doubao/Qwen/Yuanbao (китайское регулирование), Sesame AI/Maya/Miles, Moshi full-duplex sync, HumDial Challenge, Klarna+ElevenLabs, ElevenLabs Conversational AI 2.0/Eleven v3, Stanford HAI loneliness study, Stanford AI Index 2026 public opinion, Mymeet.ai, IJHCI sycophancy study, "почему голосовые агенты проваливаются" (Medium/Rizvi).

## Пачка 2 (2026-09-09, sources/raw/2026-09-09-batch-2.md)

1. Rime — $24M Series A на speech-to-speech модель — https://www.voiceaispace.com/news/voice-ai-news-2026-07-20-aeps — слой 1 (VoiceAISpace)
2. Meta — патент на устройство слежения за эмоциями по голосу — https://www.voiceaispace.com/news/voice-ai-news-2026-07-20-aeps — слой 1
3. Arc — $10.76M seed, голосовой ИИ для drive-through — https://www.voiceaispace.com/news/voice-ai-news-2026-05-25-cz0n — слой 1
4. Bland — $50M Series C после 180 отказов инвесторов — https://www.voiceaispace.com/news/voice-ai-news-2026-06-22 — слой 1
5. Sarvam AI — единорог, $234M, многоязычные голосовые модели (Индия) — https://www.voiceaispace.com/news/voice-ai-news-2026-06-22 — слой 1
6. Lovo AI — банкротство Chapter 7 на фоне иска о клонировании голоса — https://www.thestreet.com/technology/ai-voice-cloning-firm-collapses-lovo-in-chapter-7-bankruptcy — слой 2
7. Cambridge/Acta Neuropsychiatrica — переход text→voice усиливает психологический риск (Augustin, Østergaard) — https://www.cambridge.org/core/journals/acta-neuropsychiatrica/article/when-artificial-intelligence-speaks-psychologically-adverse-effects-of-the-shift-from-text-to-voicebased-chatbots/8BF48E1A5D1EDE86F86EF95919FBF2FB — слой 3
8. Calling Clones — voice-эксперимент «звонок будущему себе» (Javi Fandos/Vapi) — https://www.producthunt.com/products/calling-clones — слой 7
9. OpenAI — GPT-Realtime-2, рассуждение уровня GPT-5 в голосе — https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/ — слой 4
10. Google DeepMind — Gemini 3.1 Flash TTS, инлайн-теги эмоций — https://deepmind.google/models/gemini-audio/speech-generation/ — слой 4
11. Microsoft Research — "LLMs Get Lost in Multi-Turn Conversation" (Laban et al., ICLR 2026 Best Paper) — https://www.microsoft.com/en-us/research/publication/llms-get-lost-in-multi-turn-conversation/ — слой 4
12. Anthropic — Claude Voice Mode: Opus/Sonnet, инструменты, остаётся turn-based (не full-duplex) — https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/ — слой 4 (журналистика об анонсе Anthropic)

**Итого покрыто слоёв в пачке 2:** 1 (VoiceAISpace — 5 карточек), 4 (OpenAI/DeepMind/Microsoft Research/Anthropic — 4 карточки), плюс 2, 3, 7 точечно.

**Компании/темы, покрытые в пачке 2 — не дублировать:** Rime, Meta emotion-tracking patent, Arc (drive-through), Bland (Series C/180 отказов), Sarvam AI (unicorn), Lovo AI (bankruptcy), Augustin/Østergaard voice-vs-text editorial, Calling Clones, OpenAI GPT-Realtime-2/2.1, Google Gemini 3.1 Flash TTS, Microsoft Research multi-turn conversation paper, Anthropic Claude Voice Mode Opus/Sonnet update.

## Пачка 3 (2026-09-09, sources/raw/2026-09-09-batch-3.md)

1. VentureBeat — точка перелома voice AI: Inworld TTS 1.5, FlashLabs Chroma 1.0, Nvidia PersonaPlex, Qwen3-TTS, Google DeepMind + Hume AI — https://venturebeat.com/orchestration/everything-in-voice-ai-just-changed-how-enterprise-ai-builders-can-benefit — слой 2 (VentureBeat)
2. University of Washington — проактивный слуховой аппарат, распознающий собеседника по ритму реплик (turn-taking) — https://spectrum.ieee.org/proactive-ai-hearing-devices — слой 2 (IEEE Spectrum)
3. Raghavan/Schneier — предложение делать ИИ-голоса намеренно «роботскими» (ring modulator) — https://spectrum.ieee.org/audio-deepfake-fix — слой 2 (IEEE Spectrum, мнение)
4. targetai — критерии оценки TTS-движков для голосового ИИ-ассистента (time-to-first-audio) — https://habr.com/ru/articles/1044882/ — слой 6 (Хабр)
5. Аутсорсинговый контакт-центр (Innesiya) — детекция завершённости реплики / barge-in, снижение перехватов с 14% до 3,2% — https://habr.com/ru/articles/1072110/ — слой 6 (Хабр)
6. TAdviser — обзор трендов ИИ в России 2026: SER/FER распознавание эмоций всё ещё на стадии пилота — https://www.tadviser.ru/index.php/Статья:Тенденции_развития_технологий_искусственного_интеллекта_в_России._Обзор_TAdviser_2026 — слой 6 (TAdviser)
7. TAdviser/Meticulous Research — мировой рынок речевой аналитики вырос до $4,31 млрд — https://www.tadviser.ru/index.php/Статья:Умные_речевые_сервисы — слой 6 (TAdviser)
8. Latent Space — панель «Forward Deployed: Voice AI» (Vapi, Decagon, Retell, Smallest AI): консенсус на каскадной архитектуре против speech-to-speech — https://www.youtube.com/watch?v=YnHy7JAVyNw — слой 7 (Latent Space)
9. The Batch — Andrew Ng о голосовых интерфейсах как канале доступности — https://www.deeplearning.ai/the-batch/tag/apr-03-2026/ — слой 7 (The Batch)
10. HEART benchmark — сравнение LLM и людей в эмоциональной поддержке в диалоге — https://arxiv.org/pdf/2601.19922 — слой 3 (arXiv)
11. «Everything Counts» — omnirelevance речи: как люди меняют речь, опасаясь случайно триггернуть голосового агента — https://arxiv.org/abs/2510.22610 — слой 3 (arXiv)

**Итого покрыто слоёв в пачке 3:** 2 (VentureBeat, IEEE Spectrum x2), 6 (Хабр x2, TAdviser x2), 7 (Latent Space, The Batch), плюс 3 (arXiv x2) точечно.

**Компании/темы, покрытые в пачке 3 — не дублировать:** Inworld AI TTS 1.5, FlashLabs Chroma 1.0, Nvidia PersonaPlex, Alibaba Qwen3-TTS, Google DeepMind+Hume AI deal, UW proactive hearing aid (Gollakota), Raghavan/Schneier ring-modulator proposal, targetai TTS engine criteria, Innesiya/контакт-центр barge-in engineering, TAdviser AI trends 2026 (SER/FER pilot), TAdviser/Meticulous Research speech analytics $4.31B, Latent Space Forward Deployed panel (Vapi/Decagon/Retell/Smallest AI/Exaflop Labs), The Batch voice UI accessibility, HEART benchmark, "Everything Counts" omnirelevance paper (Rudaz/Broth/Mlynar).

## Пачка 4 (2026-09-09, sources/raw/2026-09-09-batch-4.md)

1. LiveKit — Adaptive Interruption Handling (модель отличает перебивание от бэкчаннелов "угу"/шума) — https://livekit.com/blog/adaptive-interruption-handling — слой 5 (LiveKit)
2. LiveKit — Turn Detector v1.0 (конец реплики по аудио, семантика+акустика, eot-bench) — https://livekit.com/blog/solving-end-of-turn-detection — слой 5
3. Daily/Pipecat — PhoneLLM Alpha 1 (открытая 3.5B MoE-модель под голосовых агентов, BSD) — https://www.daily.co/blog/announcing-pipecat-phonellm-alpha-1/ — слой 5
4. AssemblyAI — "Voice AI in 2026: Companies and Investments" (PolyAI $86M Series D, Retell Assure QA) — https://www.assemblyai.com/blog/voice-ai-in-2026-series-1 — слой 5
5. HappyRobot — $150M Series C, единорог, оркестрация 6 моделей на звонок — https://tech.eu/2026/08/04/happyrobot-lands-150m-series-c-to-scale-agentic-ai-for-enterprise-operations/ — слой 2 (tech.eu)
6. Retell AI — $50M ARR на $5.1M инвестиций, капитальная эффективность — https://finance.yahoo.com/sectors/technology/articles/voice-ai-startup-retell-ai-131700326.html — слой 2 (Yahoo Finance / Wing VC Enterprise Tech 30)
7. Хабр (cskeleto) — "Голосовой агент — это не чатбот с телефоном", $100 и 40 часов сожжено на обзвоне автоответчиков — https://habr.com/ru/articles/1031148/ — слой 6 (Хабр)
8. Хабр (Zazza) — ИИ-ассистент с долговременной памятью: веса/забывание фактов + конфликт с 152-ФЗ при иностранных LLM — https://habr.com/ru/articles/1050300/ — слой 6
9. N+1 — OpenAI GPT-Live, полнодуплексная модель, можно перебивать в любой момент — https://nplus1.ru/news/2026/07/10/openai-gpt-live — слой 6 (N+1)
10. ACL 2026 Findings — FreezeEmpath: эмпатичный голосовой чат-бот с заморозкой весов LLM — https://aclanthology.org/2026.findings-acl.846/ — слой 3 (ACL Anthology)
11. Hugging Face Blog — Cohere Labs cohere-transcribe-03-2026 (открытая 2B ASR-модель, Apache 2.0) — https://huggingface.co/blog/CohereLabs/cohere-transcribe-03-2026-release — слой 3
12. Encore AI (ex-Insait IO) — $30M Series A, "interaction mining" — агенты учатся на успешных звонках сотрудников — https://www.voiceaispace.com/news/voice-ai-news-2026-08-09-dtid — слой 1 (VoiceAISpace)

**Итого покрыто слоёв в пачке 4:** 5 (LiveKit x2, Pipecat, AssemblyAI — впервые тронут весь слой), 6 (Хабр x2, N+1), 3 (ACL, Hugging Face Blog — впервые тронут HF), плюс 2 и 1 точечно.

**Компании/темы, покрытые в пачке 4 — не дублировать:** LiveKit Adaptive Interruption Handling, LiveKit Turn Detector v1.0, Pipecat PhoneLLM Alpha 1/PhoneBench, AssemblyAI Voice AI in 2026 report (PolyAI Series D, Retell Assure), HappyRobot Series C/unicorn/six-model architecture, Retell AI $50M ARR capital efficiency story, Хабр cskeleto "не чатбот с телефоном", Хабр Zazza память+152-ФЗ, OpenAI GPT-Live, ACL FreezeEmpath, Cohere Labs cohere-transcribe-03-2026, Encore AI/Insait IO interaction mining.

## Пачка 5 (2026-09-09, sources/raw/2026-09-09-batch-5.md)

1. Smallest.ai — $13M Series A, голосовые модели для контакт-центров, цель «сломать тест Тьюринга» задержкой ответа — https://techcrunch.com/2026/07/31/smallest-ai-raises-13m-to-build-ultra-fast-voice-ai-that-sounds-genuinely-human/ — слой 2 (TechCrunch)
2. OpenAI — аудио-устройство-компаньон без экрана; гонка ИИ-колец (Sandbar, стартап Эрика Мигиковски); провал Humane AI Pin как контрпример — https://techcrunch.com/2026/01/01/openai-bets-big-on-audio-as-silicon-valley-declares-war-on-screens/ — слой 2 (TechCrunch)
3. ElevenLabs — восстановление голоса музыканту Patrick Darling с БАС, выступление на сцене впервые за два года — https://www.technologyreview.com/2026/02/13/1132913/als-stole-this-musicians-voice-ai-sing/ — слой 2 (MIT Technology Review)
4. Ato (Eighteen Labs) — безэкранный голосовой ИИ-компаньон для пожилых, 1300+ устройств, ~60% удержания — https://www.jonpeddie.com/reviews/ato-a-voice-first-ai-companion-built-for-seniors/ — вне списка слоёв (независимый аналитик, Jon Peddie Research)
5. AIRA (Mefodiytr, Хабр) — как голосовой ИИ-агент врал клиентам, путал звонящих и подделывал голос, и как это починили — https://habr.com/ru/articles/1053502/ — слой 6 (Хабр)
6. Daily/Pipecat — Pipecat Flows: почему контекстного окна недостаточно голосовому агенту («context rot») — https://www.daily.co/blog/beyond-the-context-window-why-your-voice-agent-needs-structure-with-pipecat-flows/ — слой 5 (Daily/Pipecat)
7. EmoNet-Voice — бенчмарк распознавания эмоций в речи: гнев 95%, грусть vs дистресс — 63% — https://arxiv.org/abs/2506.09827 — слой 3 (arXiv)
8. NVIDIA — Magpie Multilingual TTS, открытые веса, 32 мс до первого звука, 12 языков — https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents — слой 3 (Hugging Face Blog)
9. S-MARC — предсказание поведения в full-duplex диалоге как объяснимый граф причинно-следственных связей (готовится к INTERSPEECH 2026) — https://arxiv.org/pdf/2602.11065 — слой 3 (arXiv)
10. Mem-PAL — архитектура персистентной памяти о пользователе для долгосрочных диалоговых ассистентов — https://arxiv.org/pdf/2511.13410 — слой 3 (arXiv)

**Итого покрыто слоёв в пачке 5:** 3 (arXiv x3, Hugging Face Blog), 2 (TechCrunch x2, MIT Technology Review — впервые тронут), 5 (Daily/Pipecat), 6 (Хабр), плюс независимый аналитик (Jon Peddie Research) вне основного списка слоёв.

**Компании/темы, покрытые в пачке 5 — не дублировать:** Smallest.ai Series A/Turing test framing, OpenAI screenless companion device roadmap, Sandbar AI ring, Eric Migicovsky AI ring startup, Humane AI Pin failure (упомянут как контекст), ElevenLabs impact program/Patrick Darling ALS story, Ato/Eighteen Labs senior companion device, AIRA voice agent Habr provал-кейс (Mefodiytr), Daily/Pipecat Flows context rot, EmoNet-Voice benchmark, NVIDIA Magpie TTS, S-MARC full-duplex behavior modeling, Mem-PAL memory architecture.

## Пачка 6 (2026-09-09, sources/raw/2026-09-09-batch-6.md)

1. Friend AI Necklace 2.0 — провал компаньон-подвески, разгром рекламы в метро NYC — https://thedigitalrunway.substack.com/p/friends-ai-friend-ai-necklace-fashion-tech-case-study — вне списка слоёв (независимый кейс-стади/аналитик)
2. Huxe — закрытие аудио-приложения экс-NotebookLM разработчиков после фичи Google/Spotify — https://techcrunch.com/2026/05/22/audio-generation-app-huxe-founded-by-former-notebooklm-developers-shuts-down/ — слой 2 (TechCrunch)
3. Phonely — голосовая LLM Alma, обучена на 10М+ реальных звонков, конкурирует с GPT-4.1 — https://www.speechtechmag.com/Articles/News/Speech-Technology-News/Phonely-Launches-Alma-a-Voice-LLM-176422.aspx — слой 1 (Speech Technology Magazine)
4. Wispr Flow — $280М раунд, речевая модель Canto, WER в шуме 30%→5-10% — https://www.speechtechmag.com/Articles/News/Speech-Technology-News/Wispr-Raises-%24280-Million-to-Advance-Its-Flow-AI-Voice-Technology-176400.aspx — слой 1 (Speech Technology Magazine)
5. Joshua W.J. Brown — «проблема имён собственных» в распознавании речи, WER маскирует провалы на именах — https://www.speechtechmag.com/Articles/Editorial/Industry-Voices/The-Proper-Noun-Problem-in-Speech-Recognition-176481.aspx — слой 1 (Speech Technology Magazine, колонка)
6. Google DeepMind — Gemini 3.5 Transcribe: убирает слова-паразиты, ловит самоисправления, атрибуция говорящих — https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/ — слой 4
7. Anthropic — единая память Claude между чатом и Cowork, редактируемые «темы», чувствительное не хранится по умолчанию — https://techcrunch.com/2026/08/25/claude-cowork-finally-remembers-what-you-told-the-app-in-chat/ — слой 4 (журналистика об анонсе Anthropic)
8. ACII DaiKon 2026 (Hume AI) — челлендж на датасете Hume-DaiKon: направленное влияние, turn-taking, траектория раппорта в парном диалоге — https://arxiv.org/abs/2605.02672 — слой 3 (arXiv)
9. ModeratorLM (Amazon) — очередь реплик в групповом разговоре зависит от назначенной роли агента — https://arxiv.org/abs/2606.13544 — слой 3 (arXiv)
10. Xiong, Sun, Wang (IJCS) — антропоморфизация голосовых ассистентов у пожилых снижает барьер принятия даже при высокой тревожности — https://onlinelibrary.wiley.com/doi/10.1111/ijcs.70195 — слой 3 (рецензируемый журнал, вне основного списка источников)

**Итого покрыто слоёв в пачке 6:** 1 (Speech Technology Magazine — впервые прямой источник издания, 3 карточки), 4 (Google DeepMind, Anthropic — 2 карточки, впервые с пачки 2), 3 (arXiv x2, IJCS), плюс 2 (TechCrunch) и 1 независимый источник вне 7 слоёв.

**Компании/темы, покрытые в пачке 6 — не дублировать:** Friend AI necklace (Avi Schiffmann), Huxe shutdown (Raiza Martin/Jason Spielman/Stephen Hughes), Phonely/Alma voice LLM, Wispr Flow/Canto speech model, Joshua W.J. Brown "proper noun problem" editorial, Google Gemini 3.5 Transcribe, Anthropic unified memory (chat+Cowork topics), ACII DaiKon 2026/Hume-DaiKon dataset, ModeratorLM (Amazon adaptive turn-taking), Xiong/Sun/Wang IJCS anthropomorphism-older-adults study.

## Итоговая сводка по слоям источников за пачки 1–6 (67 карточек)

Подсчёт по всем разделам лога выше (без учёта карточек, отмеченных как «вне списка слоёв» — они вынесены отдельной строкой).

| Слой | Пачка 1 | Пачка 2 | Пачка 3 | Пачка 4 | Пачка 5 | Пачка 6 | Итого |
|---|---|---|---|---|---|---|---|
| 1 (голос/речь/разговор — Voicebot.ai, Synthedia, Speech Technology Magazine, VoiceAISpace, INTERSPEECH) | 0 | 5 | 0 | 1 | 0 | 3 | **9** |
| 2 (журналистика — MIT Tech Review, Verge, Ars Technica, TechCrunch, VentureBeat, Wired, IEEE Spectrum) | 3 | 1 | 3 | 2 | 3 | 1 | **13** |
| 3 (наука — arXiv, ACL Anthology, Nature, Stanford HAI, Hugging Face Blog, и близкие рецензируемые журналы) | 5 | 1 | 2 | 2 | 4 | 3 | **17** |
| 4 (первичка лабораторий — OpenAI, Google DeepMind, Anthropic, Microsoft Research) | 0 | 4 | 0 | 0 | 0 | 2 | **6** |
| 5 (сборка голосовых агентов — Daily/Pipecat, LiveKit, AssemblyAI, ElevenLabs) | 2 | 0 | 0 | 4 | 1 | 0 | **7** |
| 6 (русскоязычная сцена — Хабр, VC.ru, N+1, TAdviser) | 1 | 0 | 4 | 3 | 1 | 0 | **9** |
| 7 (радар малого и «что будет» — Import AI, The Batch, Latent Space) | 1 | 1 | 2 | 0 | 0 | 0 | **4** |
| Вне списка 7 слоёв (независимые аналитики/кейс-стади) | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| **Итого карточек в пачке** | **12** | **12** | **11** | **12** | **10** | **10** | **67** |

Самые слабые слои после 6 пачек: 4 (первичка лабораторий, 6 карточек — только точечные анонсы) и 7 (радар малого, 4 карточки — Import AI ни разу не дал релевантного по голосу выпуска за весь цикл). Самый сильный — слой 3 (наука, 17 карточек), что ожидаемо: turn-taking, сигналы, эмоции и память активнее всего исследуются в arXiv/ACL, а не в индустриальной прессе.
