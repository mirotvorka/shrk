const positions = ['малыш', 'малыш-топотушка', 'юнга', 'матрос', 'старший матрос', 'морской волк'];
const mentorOptions = ['-', 'Ясно Солнышко', 'Дурёха', 'Утопленник', 'Алиот', 'Грехи', 'Крылатая Смерть Денница', 'Собачина', 'Горечь', 'Солнцепоклонница'];

const rankTypes = {
    'юнги': { mentor: true, pirate: false, fem: false, label: 'юнги' },
    'матросы': { mentor: false, pirate: true, fem: true, label: 'матросы' },
    'старшие матросы': { mentor: false, pirate: false, fem: true, label: 'старшие матросы' },
    'морские волки': { mentor: false, pirate: false, fem: true, label: 'морские волки' }
};

const medalGroups = {
    'Для малышей': ['Юный активист', 'Непревзойденный активист', 'Юный непоседа', 'Неповторимый непоседа', 'Юный страж', 'Превосходный страж'],
    'За навыки': ['Острые когти', 'Умелый боец', 'Покоритель волн', 'Покоривший море', 'Покоритель вершин', 'Покоривший солёные скалы', 'Археолог-любитель', 'Великий кладоискатель', 'Собачий нюх', 'Совершенное чутьё'],
    'Каратели': ['Правосудие', 'Ветеран передовой', 'Ни шагу назад', 'Наш дом — наша крепость'],
    'Связанные со сферами': ['Спокойные берега', 'Блюститель порядка', 'Всегда начеку', 'Спокойствие бесценно', 'Прирождённый охотник', 'Неутомимый добытчик', 'Молодой поварёнок', 'Талантливый кулинар', 'Любимец доктора', 'Опытный травник', 'Проворный зверолов', 'Прошедший тысячи троп', 'Исцеляющий взгляд', 'Заклинатель трав'],
    'Связанные с отрядами': ['Путеводный свет', 'Преданный спутник', 'Верный напарник', 'Крепкая лапа', 'Перо знаний', 'Мозгодуй', 'Из уст в уста', 'Сокровенные знания', 'Исследующий морские глубины', 'Пересчитавший все песчинки на морском дне', 'Хитрый вор перьев', 'Прозвавшийся птичьим несчастьем', 'Обнаруживший залежи драгоценностей', 'Хранитель морских сокровищ', 'Слушающий причитания моря', 'Позаботившийся о морском покое', 'Мастер кисти', 'Виртуоз кисти', 'Овладевающий морским искусством', 'Мастер морского боя', 'Боевой товарищ', 'Старший зверь', 'Ловкий добытчик лакомства', 'Бесплатный сыр лишь в мышеловке', 'Сырный любитель', 'Сырная душа', 'Ловец горячих новостей', 'Охотник за сенсациями', 'Искусство убеждения', 'Продай мне эту ручку', 'Игривый друг', 'Мастер развлечений', 'Подмастерье настроения', 'Хранитель праздника', 'Летописец', 'Миротворец', 'Тянущийся к морским звёздам', 'Знаток глубин', 'Душа компании', 'Главный затейник'],
    'Остальные медали': ['Триумф', 'Коллективные узы', 'Объединяющий дух', 'Лапа помощи', 'Мастер слова', 'Виртуоз слова', 'Паучьи сети', 'Ловкий собиратель', 'Всегда на связи', 'Опутанный всемирной паутиной', 'Верный компаньон', 'Образцовый проводник', 'Плечом к плечу', 'Мы — едины'],
    'Отрядные медали': ['Сказитель легенд', 'Зубастый крепыш', 'Белопёрый поздравитель', 'Любимый учитель', 'Дарящий улыбку', 'Чистота и порядок', 'Пернатый крикун', 'Резвость дельфина']
};

const trophyGroups = {
    'Общекомандные трофеи': ['Треклятый дублон', 'Кинжал триумфа', 'Бутылочка из душистой кладовой', 'Верный путь', 'Записки краболова', 'Жаба', 'Мешок с золотом', 'Созвездие морского конька', 'Созвездие акулы', 'Созвездие дельфина', 'Созвездие косатки', 'Созвездие осьминога', 'Созвездие мурены', 'Созвездие ската', 'Созвездие черепахи', 'Созвездие крылатки', 'Созвездие медузы', 'Созвездие летучей рыбы', 'Созвездие марлина', 'Созвездие нарвала', 'Созвездие кита'],
    'Отрядные трофеи': ['Задорный компаньон', 'Безупречность осьминога', 'Китовая забота', 'Неугомонность чайки', 'Акулья свирепость', 'Рыбья задорность', 'Черепашья мудрость', 'Прирождённый творец', 'Коралловый хохотун', 'Рубиновый глаз', 'Красноречивый рассказчик', 'Задорность малька', 'Путеводная звезда'],
    'Должностные трофеи': ['Пистоль', 'Абордажный палаш', 'Монета мертвецов']
};

const costumeGroups = {
    'Общекомандные костюмы': {
        'Коллекционер трофеев': [], 'Одеяние зверя': [], 'Любитель сидра': [], 'Шапка-жабка': [],
        'Шапка-мухомор': [], 'Шапка-сидр': [], 'Паладин хаоса': [], 'Фаворит': ['с налапниками', 'без налапников'],
        'Вояка': [], 'Владелец диковинок': [], 'Пелагея': [], 'Мастер абордажа': [], 'Маленький матрос': [],
        'Боевой авантюрист': [], 'Шельфовый исследователь': [], 'Цветочный ансамбль': ['вариант 1', 'вариант 2', 'вариант 3'],
        'Тупик': [], 'Провинившийся': []
    },
    'Отрядные костюмы': {
        'Охотник на акул': [], 'Буревестник': [], 'Вестник морей': [], 'Образцовый чистюля': [],
        'Сверкающая жемчужина': [], 'Менестрель слова': [], 'Дары морей': ['с картой', 'без карты'],
        'Опытный чтец': [], 'Искусный травовед': ['красный цвет', 'черный цвет'], 'Пилигрим': [],
        'Рыба-Клоун': [], 'Заядлый рыболов': []
    },
    'Должностные костюмы': {
        'Костюм юнги': ['Красный', 'Зеленый', 'Синий'],
        'Костюм юнги №2': ['Красный', 'Синий', 'Коричневый'],
        'Костюм матроса': ['Красный', 'Зеленый', 'Синий', 'Фиолетовый', 'Серый'],
        'Костюм матроса №2': ['Красный', 'Зеленый', 'Синий', 'Фиолетовый', 'Серый'],
        'Костюм старшего матроса': ['Красный', 'Зеленый', 'Синий', 'Фиолетовый', 'Серый']
    },
    'Праздничные костюмы': {
        'Праздничный звездочёт': [],
        'Цветочный ансамбль': ['вариант 1', 'вариант 2', 'вариант 3']
    }
};

const titleGroups = {
    'Прилагательная должность': {
        'юнга': ['Озорной юнга', 'Дерзкий юнга'],
        'матрос': ['Умелый матрос', 'Прыткий матрос'],
        'старший матрос': ['Смекалистый старый матрос', 'Свирепый старый матрос'],
        'малыш': ['Дурашливый(ая) малыш(ка)', 'Смышлёны(ая) малыш(ка)'],
        'terms': ['на две недели', 'на месяц']
    },
    'Уникальная должность': {
        'items': ['Любимец морского дьявола', 'Гроза морей', 'Лихой корсар', 'Морской змей', 'Джентльмен удачи', 'Леди удачи'],
        'terms': ['на месяц', 'на два месяца']
    }
};

const qs = (id) => document.getElementById(id);

function calculateTimeDifference(timeString) {
    const times = timeString.match(/(\d{1,2})[:.](\d{2})/g);
    if (!times || times.length !== 2) {
        return { minutes: 0, formatted: "00:00", startStr: "00.00", endStr: "00.00" };
    }

    const startStr = times[0].replace(':', '.');
    const endStr = times[1].replace(':', '.');

    const [startH, startM] = startStr.split('.').map(Number);
    const [endH, endM] = endStr.split('.').map(Number);

    let startTotal = startH * 60 + startM;
    let endTotal = endH * 60 + endM;
    if (endTotal < startTotal) endTotal += 24 * 60;

    const diffMinutes = endTotal - startTotal;
    const h = Math.floor(diffMinutes / 60);
    const m = diffMinutes % 60;

    return {
        minutes: diffMinutes,
        formatted: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
        startStr: startStr,
        endStr: endStr
    };
}

function getMoscowDate() {
    try {
        const parts = new Intl.DateTimeFormat('ru-RU', {
            timeZone: 'Europe/Moscow', day: '2-digit', month: '2-digit', year: '2-digit'
        }).formatToParts(new Date());
        const map = {};
        parts.forEach(part => { if (part.type !== 'literal') map[part.type] = part.value; });
        return `${map.day}.${map.month}.${map.year}`;
    } catch (e) {
        const d = new Date();
        return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getFullYear()).slice(-2)}`;
    }
}

function fillValidDates() {
    const select = qs('rankDate');
    if (!select) return;
    const validDays = [0, 1, 3, 5]; 
    const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const dates = [];
    let d = new Date(); 
    while (dates.length < 5) { 
        if (validDays.includes(d.getDay())) {
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = String(d.getFullYear()).slice(-2);
            dates.push({ val: `${day}.${month}.${year}`, text: `${day}.${month}.${year} (${dayNames[d.getDay()]})` });
        }
        d.setDate(d.getDate() + 1); 
    }
    select.innerHTML = '';
    dates.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.val;
        opt.textContent = d.text;
        select.append(opt);
    });
    select.selectedIndex = 0; 
}

function fillSelect(select, items) {
    if (!select) return;
    select.innerHTML = '';
    items.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        select.append(opt);
    });
}

function makeProofs(raw) {
    if (!raw || !raw.trim()) return '[b]Доказательства:[/b] скриншот.';
    const links = raw.trim().split(/\s+/).filter(Boolean);
    let text = `[b]Доказательства:[/b] [[url=${links[0]}]скриншот[/url]]`;
    for (let i = 1; i < links.length; i++) {
        text += ` [[url=${links[i]}]скриншот${i + 1}[/url]]`;
    }
    return text + '.';
}

function setForm(formId) {
    document.querySelectorAll('.form-view').forEach(el => el.classList.add('hidden'));
    const target = qs(`form-${formId}`);
    if (target) target.classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.form === formId);
    });
}

const routes = {
    'sphere-squadron': 'escadra', 'main-blog': 'main', 'awards-blog': 'nagrady',
    'task-board': 'doska', 'pirate-code': 'codex', 'squad-seagulls': 'chaiki',
    'squad-kits': 'kiti', 'squad-turtles': 'cherepahi', 'squad-sharks': 'akula',
    'squad-octopus': 'osminogi', 'squad-flyingfish': 'letriba', 'squad-albatross': 'albatros',
    'squad-dolphins': 'delfin', 'squad-clownfish': 'clownriba', 'sphere-guard': 'ohranka',
    'sphere-food': 'prodovolka', 'sphere-heal': 'vrach', 'shelter-blog': 'priyut',
    'other-journal': 'journal'
};

document.addEventListener("DOMContentLoaded", () => {
    const mainInputs = document.querySelectorAll('.save-id');   
    const extraInputs = document.querySelectorAll('.extra-id');
    const savedUserId = localStorage.getItem('shrk_user_id');
    
    if (savedUserId) {
        mainInputs.forEach(input => { input.value = savedUserId; });
        extraInputs.forEach(input => { input.value = savedUserId; });
    }

    mainInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            const newValue = event.target.value.trim();
            localStorage.setItem('shrk_user_id', newValue);
            
            mainInputs.forEach(otherInput => {
                if (otherInput !== event.target) {
                    otherInput.value = newValue;
                }
            });
        });
    });

    extraInputs.forEach(input => {
        input.addEventListener('input', () => {
        });
    });
});

function getHashByFormId(formId) { return routes[formId] || formId; }
function getFormIdByHash(hash) {
    for (let key in routes) { if (routes[key] === hash) return key; }
    return hash; 
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const formId = btn.dataset.form;
        setForm(formId);
        qs('workAreaTitle').textContent = e.target.textContent.trim();
        window.location.hash = getHashByFormId(formId);
    });
});

function openTabFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const formId = getFormIdByHash(hash);
        const activeBtn = document.querySelector(`.nav-btn[data-form="${formId}"]`);
        if (activeBtn) {
            const accItem = activeBtn.closest('.acc-item');
            if (accItem) accItem.classList.add('open');
            setForm(formId);
            qs('workAreaTitle').textContent = activeBtn.textContent.trim();
        }
    }
}

window.addEventListener('DOMContentLoaded', openTabFromHash);
window.addEventListener('hashchange', openTabFromHash);

const mainLogoTitle = document.querySelector('.topbar h1');
mainLogoTitle.style.cursor = 'pointer'; 
mainLogoTitle.addEventListener('click', () => {
    setForm('welcome');
    qs('workAreaTitle').textContent = 'Приветствие';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.acc-item').forEach(item => item.classList.remove('open'));
    window.history.replaceState(null, null, window.location.pathname);
});

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = qs(btn.dataset.copy);
    if(el && el.value) {
      navigator.clipboard.writeText(el.value).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Скопировано!';
        setTimeout(() => { btn.textContent = originalText; }, 1500);
      });
    }
  });
});

const navToggle = qs('navToggle');
const navCol = qs('navCol');
if (navToggle && navCol) {
    navToggle.addEventListener('click', () => {
        navCol.classList.toggle('mobile-open');
        navToggle.textContent = navCol.classList.contains('mobile-open') ? 'Скрыть навигацию' : 'Показать навигацию';
    });
}

document.querySelectorAll('.acc-head').forEach(btn => {
    btn.addEventListener('click', function () {
        const currentItem = this.closest('.acc-item');
        document.querySelectorAll('.acc-item').forEach(item => { if (item !== currentItem) item.classList.remove('open'); });
        currentItem.classList.toggle('open');
    });
});


fillValidDates();
fillSelect(qs('awardsDol'), positions);
fillSelect(qs('rankType'), Object.keys(rankTypes));
fillSelect(qs('rankMentor'), mentorOptions);

function updateRankFields() {
    const rankVal = qs('rankType').value;
    const cfg = rankTypes[rankVal];
    
    qs('rankMentorWrap').classList.toggle('hidden', !cfg.mentor);
    qs('rankPirateWrap').classList.toggle('hidden', !cfg.pirate);
    qs('rankFemWrap').classList.toggle('hidden', !cfg.fem);

    const speechWrap = qs('rankSpeechWrap');
    if (speechWrap) {
        if (rankVal === 'матросы') {
            speechWrap.classList.add('full');
        } else {
            speechWrap.classList.remove('full');
        }
    }
}
if(qs('rankType')) qs('rankType').onchange = updateRankFields;

if(qs('rankGenerate')) {
    qs('rankGenerate').onclick = () => {
        const cfg = rankTypes[qs('rankType').value];
        const id = qs('rankId').value.trim() || 'ID';
        
        const baseNameInput = qs('rankBaseName');
        const baseName = (baseNameInput && baseNameInput.value.trim()) ? baseNameInput.value.trim() : '-';

        const nameInput = qs('rankPirateName');
        const pirateName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : '-';
        
        const date = qs('rankDate').value;
        const proofs = makeProofs(qs('rankProof').value);
        const speech = qs('rankSpeech').value;

        let text = `Я, [link${id}] [${id}], желаю посвятиться в [b]${cfg.label}[/b] (${date}).\n`;
        text += `${proofs}\n\n`; 

        text += `[b]Имя:[/b] ${baseName}\n`; 
        
        if (cfg.pirate) {
            text += `[b]Пиратское имя:[/b] ${pirateName}\n`;
        }
        
        if (cfg.mentor) {
            text += `[b]Наставник:[/b] ${qs('rankMentor').value}\n`;
        }
        
        if (cfg.fem) {
            text += `[b]Феминитив:[/b] ${qs('rankFeminine').value}\n`;
        }

        text += `\n[b]Речь:[/b] ${speech}`;
        
        qs('rankResult').value = text;
    };
}


// награды
function syncAwardsGroups() {
    const modeSelect = qs('awardsMode');
    const mode = modeSelect.value;
    const label = qs('awardsGroupLabel'); 
    const selectedText = modeSelect.options[modeSelect.selectedIndex].text.replace('Запрос ', '');
    
    if (label) label.textContent = 'Тип ' + selectedText;

    let groups = [];
    if (mode === 'medal') groups = Object.keys(medalGroups);
    if (mode === 'trophy') groups = Object.keys(trophyGroups);
    if (mode === 'costume') groups = Object.keys(costumeGroups);
    if (mode === 'title') groups = Object.keys(titleGroups);

    fillSelect(qs('awardsGroup'), groups);
    syncAwardsItems();
}

function syncAwardsItems() {
    const mode = qs('awardsMode').value;
    const group = qs('awardsGroup').value;
    const itemSelect = qs('awardsItem');
    const wrap = qs('variantWrap');
    const area = qs('variantInputArea');
    const itemWrap = qs('awardsItemWrap');
    const titleNote = qs('awardsTitleNote');

    if (titleNote) titleNote.classList.add('hidden');

    if (itemWrap) {
        if (['medal', 'trophy', 'costume'].includes(mode)) {
            itemWrap.classList.add('full');
        } else {
            itemWrap.classList.remove('full');
        }
    }

    if (mode === 'costume') {
        const items = Object.keys(costumeGroups[group] || {});
        fillSelect(itemSelect, items);
        itemSelect.onchange = () => {
            const vars = costumeGroups[group][itemSelect.value] || [];
            if (vars.length > 0) {
                wrap.classList.remove('hidden');
                wrap.classList.add('full'); 
                qs('awardsVariantLabel').textContent = 'Вариант / Цвет';
                area.innerHTML = '<input id="awardsVariant" type="text" placeholder="Например: красный">';
                if (Array.isArray(vars) && vars.length > 0) {
                    area.innerHTML = '<select id="awardsVariant"></select>';
                    fillSelect(qs('awardsVariant'), vars);
                }
            } else {
                wrap.classList.add('hidden');
            }
        };
        itemSelect.onchange();

    } else if (mode === 'title') {
        if (titleNote) titleNote.classList.remove('hidden');

        wrap.classList.remove('full'); 
        const userDol = qs('awardsDol').value;

        if (group === 'Прилагательная должность') {
            const items = titleGroups[group][userDol] || [];
            if (items.length === 0) {
                itemWrap.classList.add('hidden');
                wrap.classList.add('hidden');
                if (titleNote) titleNote.classList.add('hidden'); 
            } else {
                itemWrap.classList.remove('hidden');
                wrap.classList.remove('hidden'); 
                fillSelect(itemSelect, items);
                qs('awardsVariantLabel').textContent = 'Срок ношения';
                area.innerHTML = '<select id="awardsVariant"></select>';
                fillSelect(qs('awardsVariant'), titleGroups[group].terms);
            }
        } else {
            itemWrap.classList.remove('hidden');
            wrap.classList.remove('hidden'); 
            fillSelect(itemSelect, titleGroups[group].items);
            qs('awardsVariantLabel').textContent = 'Срок ношения';
            area.innerHTML = '<select id="awardsVariant"></select>';
            fillSelect(qs('awardsVariant'), titleGroups[group].terms);
        }
        itemSelect.onchange = null;

    } else {
        itemWrap.classList.remove('hidden');
        fillSelect(itemSelect, (mode === 'medal' ? medalGroups[group] : trophyGroups[group]) || []);
        wrap.classList.add('hidden'); 
        itemSelect.onchange = null;
    }
}

if(qs('awardsMode')) qs('awardsMode').onchange = syncAwardsGroups;
if(qs('awardsGroup')) qs('awardsGroup').onchange = syncAwardsItems;
if(qs('awardsDol')) qs('awardsDol').onchange = () => { if (qs('awardsMode').value === 'title') syncAwardsItems(); };
syncAwardsGroups();

if(qs('awardsGenerate')) {
    qs('awardsGenerate').onclick = () => {
        const mode = qs('awardsMode').value;
        const id = qs('awardsId').value.trim() || 'ID';
        const dol = qs('awardsDol').value;
        const item = qs('awardsItem').value;
        const proofs = makeProofs(qs('awardsProofs').value);
        const varEl = qs('awardsVariant');
        const extra = varEl ? varEl.value : '-';

        let text = "";
        if (mode === 'medal') text = `[b]Запрос медали[/b]\nЯ, [cat${id}] [${id}], ${dol} шайки, выполнил(а) требования на медаль «${item}».\n${proofs}`;
        if (mode === 'trophy') text = `[b]Запрос трофея[/b]\nЯ, [cat${id}] [${id}], ${dol} шайки, выполнил(а) требования на трофей «${item}».\n${proofs}`;
        if (mode === 'costume') text = `[b]Запрос костюма[/b]\nЯ, [cat${id}] [${id}], ${dol} шайки, выполнил(а) требования на костюм «${item}».\n[b]Вариант/цвет:[/b] ${extra}.\n${proofs}`;
        if (mode === 'title') text = `[b]Запрос должности[/b]\nЯ, [cat${id}] [${id}], ${dol} шайки, выполнил(а) требования на должность «${item}».\n[b]Срок ношения:[/b] ${extra}.\n${proofs}`;
        qs('awardsResult').value = text;
    };
}


if (qs('eskDate')) qs('eskDate').value = getMoscowDate();

if (qs('eskGenerate')) {
    qs('eskGenerate').onclick = () => {
        const type = qs('eskType').value;
        const time = qs('eskTime').value.trim() || 'чч:мм - чч:мм';
        const id = qs('eskId').value.trim() || 'ID';
        const isLead = qs('eskIsLead').checked;
        const date = qs('eskDate').value.trim() || getMoscowDate();

        const duration = calculateTimeDifference(time).formatted;

        const leadSuffix = isLead ? ', ведущий' : '';
        
        const text = `[b]${type}[/b]\n[b]${date}[/b]; ${time} (${duration})\n[b]Участник[/b]: [[n]l[/n]ink${id}]${leadSuffix}`;
        
        qs('eskResult').value = text;
    };
}

const eskTypeSelect = qs('eskType');
const eskLeadCheckbox = qs('eskIsLead');
if (eskTypeSelect && eskLeadCheckbox) {
    const leadWrapper = eskLeadCheckbox.parentElement; 
    function toggleLeadCheckbox() {
        if (eskTypeSelect.value === 'Свободный бег') {
            leadWrapper.style.display = 'none'; 
            eskLeadCheckbox.checked = false;    
        } else {
            leadWrapper.style.display = 'flex';
        }
    }
    eskTypeSelect.addEventListener('change', toggleLeadCheckbox);
    toggleLeadCheckbox();
}

// осьминоги
if (qs('octoDate')) qs('octoDate').value = getMoscowDate();
if (qs('octoGenerate')) {
    qs('octoGenerate').onclick = () => {
        const date = qs('octoDate').value.trim() || 'дд.мм.гг';
        const navId = qs('octoNavId').value.trim() || 'ID';
        
        const rawParts = qs('octoPartIds').value.trim();
        const partsArr = rawParts.split(/[\s,]+/).filter(Boolean);
        const partsStr = partsArr.length > 0 ? partsArr.map(id => `[link${id}] [${id}]`).join(', ') : '[linkID] [ID]';

        const proofsRaw = qs('octoProofs').value.trim();
        const proofLinks = proofsRaw.split(/\s+/).filter(Boolean);
        
        let proofsText = '';
        if (proofLinks.length > 0) {
            if (proofLinks[0]) proofsText += `\n[url=${proofLinks[0]}]скриншот Глубоководья до вылазки[/url]`;
            if (proofLinks[1]) proofsText += `\n[url=${proofLinks[1]}]скриншот Глубоководья после вылазки[/url]`;
            if (proofLinks[2]) proofsText += `\n[url=${proofLinks[2]}]скриншот Палубной рубки / сундука[/url]`;
            for (let i = 3; i < proofLinks.length; i++) {
                proofsText += `\n[url=${proofLinks[i]}]скриншот ${i-2}[/url]`;
            }
        } else {
            proofsText = '\nСкриншоты были отправлены в беседу навигаторов.';
        }
        const text = `[b]Дата проведения: ${date}[/b]\n[b]Навигатор:[/b] [link${navId}] [${navId}].\n[b]Участники:[/b] ${partsStr}.${proofsText}`;
        qs('octoResult').value = text;
    };
}


// охранка
const guardLocs = ['Дыра в корабле', 'Извилистая тропа', 'Искажённая чаща', 'Тихий залив', 'Лазурная бухта', 'Отдалённая лазурная бухта'];
const guardRoutes = ['А', 'Б', 'В'];

function updateGuardForm() {
    const mode = qs('guardMode').value;
    document.querySelectorAll('[class*="guard-sub-"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll(`.guard-sub-${mode}`).forEach(el => el.classList.remove('hidden'));
    
    if (mode === 'patrol') setAutoPatrolTime();
    else if (mode === 'watch') updateWatchOptions();
    else if (mode === 'check') qs('checkTime').value = ''; 
}

function updateWatchOptions() {
    const isPassive = qs('watchSubMode').value === 'passive';
    fillSelect(qs('watchLoc'), isPassive ? guardLocs : guardRoutes);
}

function setAutoPatrolTime() {
    const times = ["03:00", "07:00", "11:00", "15:00", "20:00", "23:00"];
    const now = new Date();
    const moscow = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Moscow"}));
    const cur = `${String(moscow.getHours()).padStart(2, '0')}:${String(moscow.getMinutes()).padStart(2, '0')}`;
    let selected = times[0];
    for (let t of times) { if (cur >= t) selected = t; }
    if(qs('patrolTime')) qs('patrolTime').value = selected;
}

if(qs('guardGenerate')) {
    qs('guardGenerate').onclick = () => {
        const mode = qs('guardMode').value;
        const date = getMoscowDate();
        let result = "";

        if (mode === 'patrol') {
            const leads = qs('patrolLeads').value.trim().split(/\s+/).filter(Boolean);
            const collId = qs('patrolCollector').value || 'ID';
            const leadStr = leads.length >= 2 
                ? `[link${leads[0]}] [${leads[0]}] (А), [link${leads[1]}] [${leads[1]}] (Б)`
                : `[link${leads[0] || collId}] [${leads[0] || collId}] (Общий)`;
            const parts = qs('patrolParts').value.trim().split(/\s+/).filter(Boolean).map(id => `[link${id}] [${id}]`).join(', ');
            result = `[b]Отчёт о пограничном патруле.[/b]\n[b]${date}[/b]\nВремя сбора: ${qs('patrolTime').value}\nСобирающий: [link${collId}] [${collId}]\nВедущий: ${leadStr}\nУчастники: ${parts || '[linkID] [ID]'}`;
        } 
        else if (mode === 'watch') {
            const timeRange = qs('watchTimeRange').value || '00:00 - 00:00';
            const isPassive = qs('watchSubMode').value === 'passive';
            const wId = qs('watchId').value || 'ID';
            
            const duration = calculateTimeDifference(timeRange).formatted;
            
            result = `[b]Отчёт о ${isPassive ? 'пассивном' : 'активном'} дозоре.[/b]\n[b]${date}[/b]\nЧасы дозора: ${timeRange} (${duration})\nДозорный: [link${wId}] [${wId}]\n${isPassive ? 'Локация' : 'Маршрут'}: ${qs('watchLoc').value}`;
        }
        else if (mode === 'check') {
            const myId = qs('checkMyId').value || 'ID';
            const targetId = qs('checkTargetId').value || 'ID';
            const checkTime = qs('checkTime').value || 'чч:мм'; 
            result = `Я, [link${myId}] [${myId}], проверил дозорного [link${targetId}] [${targetId}] в ${checkTime}; проверка ${qs('checkStatus').value}.`;
        }
        qs('guardResult').value = result;
    };
}
if(qs('guardMode')) qs('guardMode').onchange = updateGuardForm;
if(qs('watchSubMode')) qs('watchSubMode').onchange = updateWatchOptions;
if(qs('guardMode')) updateGuardForm(); 


function updateDolphinForm() {
    const reportType = document.getElementById('dolphinReportType');
    const activityType = document.getElementById('dolphinActivityType');
    if (!reportType || !activityType) return;

    const activityWrap = document.getElementById('dolphinActivityWrap');
    const targetLabel = document.getElementById('dolphinTargetLabel');
    const timeWrap = document.getElementById('dolphinTimeWrap');
    const diveWrap = document.getElementById('dolphinDiveWrap');
    const proofWrap = document.getElementById('dolphinProofWrap');
    const dateWrap = document.getElementById('dolphinDateWrap');
    const toddlerWrap = document.getElementById('dolphinToddlerWrap'); 

    activityWrap.classList.add('hidden');
    timeWrap.classList.add('hidden');
    diveWrap.classList.add('hidden');
    proofWrap.classList.add('hidden');
    if (dateWrap) dateWrap.classList.add('hidden');
    if (toddlerWrap) toddlerWrap.classList.add('hidden'); 
    
    if (reportType.value === 'vk') {
        activityWrap.classList.remove('hidden');
        targetLabel.innerText = "ID сопровождаемых (через пробел)";
    } 
    else if (reportType.value === 'cw') {
        activityWrap.classList.remove('hidden');
        targetLabel.innerText = "ID сопровождаемых (через пробел)";
        
        if (dateWrap) dateWrap.classList.remove('hidden'); 

        if (activityType.value === 'dive') {
            diveWrap.classList.remove('hidden');
            if (toddlerWrap) toddlerWrap.classList.remove('hidden'); // Показываем топотушку
        } else {
            timeWrap.classList.remove('hidden');
        }
    } 
    else if (reportType.value === 'teach') {
        targetLabel.innerText = "ID игрока";
        proofWrap.classList.remove('hidden');
    }
}

const dolphinReportEl = document.getElementById('dolphinReportType');
const dolphinActivityEl = document.getElementById('dolphinActivityType');
if (dolphinReportEl) dolphinReportEl.addEventListener('change', updateDolphinForm);
if (dolphinActivityEl) dolphinActivityEl.addEventListener('change', updateDolphinForm);

const dolphinDateInput = document.getElementById('dolphinDate');
if (dolphinDateInput) dolphinDateInput.value = getMoscowDate();

const dolphinBtn = document.getElementById('dolphinGenerate');
if (dolphinBtn) {
    dolphinBtn.onclick = () => {
        const reportType = document.getElementById('dolphinReportType').value;
        const myId = document.getElementById('dolphinMyId').value.trim() || 'ID';
        const rawIdsStr = document.getElementById('dolphinTargetIds').value.trim();
        const rawIds = rawIdsStr.split(/\s+/).filter(Boolean);
        const targetIdsText = rawIds.join(', ') || 'ID';
        
        let resultText = '';

        if (reportType === 'vk') {
            const type = document.getElementById('dolphinActivityType').value;
            let vkTag = '', vkAction = '';
            if (type === 'climb') { vkTag = '#лазание'; vkAction = 'лазать.'; }
            else if (type === 'vision') { vkTag = '#зоркость'; vkAction = 'прокачивать зоркость.'; }
            else if (type === 'dive') { vkTag = '#ныряние'; vkAction = 'нырять.'; }
            resultText = `${vkTag}\n${myId}, веду ${targetIdsText} ${vkAction}`;
        } 
        else if (reportType === 'cw') {
            const type = document.getElementById('dolphinActivityType').value;
            
            const inputDate = document.getElementById('dolphinDate').value.trim();
            const date = inputDate || getMoscowDate();
            
            const isSingle = rawIds.length === 1;
            const isToddler = document.getElementById('dolphinIsToddler').checked; 
            
            let noun = '', actionCatwar = '', points = 0, timeStr = '';

            if (type === 'climb') {
                actionCatwar = 'лазал';
                noun = isSingle ? 'малышом' : 'малышами';
            } else if (type === 'vision') {
                actionCatwar = 'качал зоркость';
                noun = isSingle ? 'игроком' : 'игроками';
            } else if (type === 'dive') {
                actionCatwar = 'нырял';
                noun = isToddler ? (isSingle ? 'игроком' : 'игроками') : (isSingle ? 'малышом' : 'малышами');
            }

            const formattedIds = rawIds.map(id => `[link${id}] [${id}]`).join(', ') || '[linkID] [ID]';

            if (type === 'climb' || type === 'vision') {
                const timeRange = document.getElementById('dolphinTimeRange').value || '00.00 - 00.00';
                
                const timeData = calculateTimeDifference(timeRange);
                
                if (timeData.minutes > 0) {
                    points = type === 'climb' ? Math.floor(timeData.minutes / 6) : Math.floor(timeData.minutes / 4);
                }
                timeStr = ` с ${timeData.startStr.replace('.', ':')} до ${timeData.endStr.replace('.', ':')}`;

            } else if (type === 'dive') {
                const dives = parseInt(document.getElementById('dolphinDives').value) || 1;
                points = dives * (isToddler ? 2.5 : 5);
            }
            resultText = `[b]${date}[/b]\nЯ, [link${myId}] [${myId}], [b]${actionCatwar}[/b] с ${noun} ${formattedIds}${timeStr}\n[b]Кол-во заработанных баллов:[/b] ${points}.`;
        } 
        else if (reportType === 'teach') {
            const proof = document.getElementById('dolphinProof').value.trim() || 'ссылка';
            const tId = rawIds[0] || 'ID'; 
            resultText = `Я, [link${myId}] [${myId}], помог малышу [link${tId}] обучиться лазать.\n[url=${proof}]Доказательства[/url]`;
        }
        document.getElementById('dolphinResult').value = resultText;
    };
}
if (dolphinReportEl) updateDolphinForm();


// ВРАЧЕВАТЕЛЬНАЯ СФЕРА 
function updateHealForm() {
    const mainType = document.getElementById('healMainType').value;
    const subSpv = document.getElementById('healSubSpv').value;
    
    document.querySelector('.heal-sub-resource').classList.toggle('hidden', mainType !== 'resource');
    document.querySelector('.heal-sub-exp').classList.toggle('hidden', mainType !== 'expedition');
    document.querySelector('.heal-sub-spv').classList.toggle('hidden', mainType !== 'spv');

    const collectorLabel = document.getElementById('healCollectorLabel');
    const collectorWrap = document.getElementById('healCollectorWrap');
    const partsWrap = document.getElementById('healPartsWrap');
    const helpersWrap = document.getElementById('healHelpersWrap');
    const docNote = document.getElementById('healDocNote');
    const miceWrap = document.getElementById('healMiceWrap');
    const patientWrap = document.getElementById('healPatientWrap');
    const diseaseWrap = document.getElementById('healDiseaseWrap');
    const replacedWrap = document.getElementById('healReplacedWrap');

    collectorWrap.classList.remove('hidden');
    collectorWrap.classList.remove('full');
    partsWrap.classList.remove('hidden');
    partsWrap.classList.remove('full'); 
    helpersWrap.classList.add('hidden');
    docNote.classList.add('hidden');
    miceWrap.classList.add('hidden');
    patientWrap.classList.add('hidden');
    diseaseWrap.classList.add('hidden');
    replacedWrap.classList.add('hidden');
    
    collectorLabel.innerText = "Собирающий (ID)";

    if (mainType === 'doc_patrol') {
        helpersWrap.classList.remove('hidden');
        docNote.classList.remove('hidden');
        partsWrap.classList.add('full'); 
    } 
    else if (mainType === 'free_hunt') {
        collectorLabel.innerText = "Участник (ID)";
        partsWrap.classList.add('hidden');
        miceWrap.classList.remove('hidden');
    } 
    else if (mainType === 'spv') {
        partsWrap.classList.add('hidden');
        if (subSpv === 'heal') {
            collectorLabel.innerText = "ID";
            patientWrap.classList.remove('hidden');
            diseaseWrap.classList.remove('hidden');
        } else if (subSpv === 'duty') {
            collectorLabel.innerText = "Дежурный (ID)";
            collectorWrap.classList.add('full'); 
        } else if (subSpv === 'supervision') {
            collectorLabel.innerText = "Надзорный (ID)";
            replacedWrap.classList.remove('hidden');
            collectorWrap.classList.add('full'); 
        }
    }
}

const healMainEl = document.getElementById('healMainType');
const healSpvEl = document.getElementById('healSubSpv');
if (healMainEl) healMainEl.addEventListener('change', updateHealForm);
if (healSpvEl) healSpvEl.addEventListener('change', updateHealForm);

function formatHealIds(rawStr) {
    const raw = rawStr.trim().split(/\s+/).filter(Boolean);
    return raw.map(str => {
        let id = str;
        let miceStr = '';
        if (str.includes('+')) {
            const parts = str.split('+');
            id = parts[0];
            miceStr = ` (+${parts[1]} мышей)`;
        }
        return `[link${id}] [${id}]${miceStr}`;
    }).join(', ') || '-';
}

const healChips = document.querySelectorAll('.shrk-chip');
healChips.forEach(chip => { chip.addEventListener('click', () => chip.classList.toggle('active')); });

const healBtn = document.getElementById('healGenerate');
if (healBtn) {
    healBtn.onclick = () => {
        const mainType = document.getElementById('healMainType').value;
        const myId = document.getElementById('healCollectorId').value.trim() || 'ID';
        const date = getMoscowDate();
        let resultText = '';

        if (mainType === 'resource' || mainType === 'expedition') {
            const sub = mainType === 'resource' ? document.getElementById('healSubResource').value : document.getElementById('healSubExp').value;
            let subConjugated = sub;
            if (sub === 'веточник') subConjugated = 'веточнике';
            if (sub === 'травник') subConjugated = 'травнике';
            if (sub === 'мховник') subConjugated = 'мховнике';
            if (sub === 'дневная экспедиция') subConjugated = 'дневной экспедиции';
            if (sub === 'вечерняя экспедиция') subConjugated = 'вечерней экспедиции';

            const parts = formatHealIds(document.getElementById('healPartIds').value);
            resultText = `[b]${date}[/b]\n[b]Отчёт о ${subConjugated}.[/b]\n[u]Собирающий:[/u] [link${myId}] [${myId}]\n[u]Участники:[/u] ${parts}`;
        }
        else if (mainType === 'doc_patrol') {
            const parts = formatHealIds(document.getElementById('healPartIds').value);
            const helpers = formatHealIds(document.getElementById('healHelperIds').value);
            resultText = `[b]${date}[/b]\n[b]Отчёт о докторском патруле.[/b]\n[u]Собирающий:[/u] [link${myId}] [${myId}]\n[u]Участники:[/u] ${parts}\n[u]Помощники:[/u] ${helpers}`;
        } 
        else if (mainType === 'free_hunt') {
            const mice = document.getElementById('healMice').value || '1';
            resultText = `[b]${date}[/b]\n[b]Отчёт о свободной охоте.[/b]\n[u]Участник:[/u] [link${myId}] [${myId}] (+${mice} мышей)`;
        } 
        else if (mainType === 'spv') {
            const sub = document.getElementById('healSubSpv').value;
            if (sub === 'heal') {
                const patientId = document.getElementById('healPatientId').value.trim() || 'ID';
                const disease = document.getElementById('healDisease').value;
                resultText = `[b]${date}[/b]\n[b]Отчёт о лечении.[/b]\nЯ, [link${myId}] [${myId}], вылечил [link${patientId}] от ${disease}.`;
            } 
            else if (sub === 'duty') {
                resultText = `[b]${date}[/b]\n[b]Отчёт о дежурстве.[/b]\n[u]Дежурный:[/u] [link${myId}] [${myId}]`;
            } 
            else if (sub === 'supervision') {
                const activeChips = document.querySelectorAll('.shrk-chip.active');
                const replacedVals = Array.from(activeChips).map(chip => chip.getAttribute('data-value'));
                const replaced = replacedVals.length > 0 ? replacedVals.join(', ') : '-';
                resultText = `[b]${date}[/b]\n[b]Отчёт о надзоре.[/b]\n[u]Надзорный:[/u] [link${myId}] [${myId}]\n[u]Заменил и провел мероприятия:[/u] ${replaced}`;
            }
        }
        document.getElementById('healResult').value = resultText;
    };
}
if (healMainEl) updateHealForm();

//ЖУРНАЛ МР 
const btnJournal = qs('btnJournal');
const journalReportType = qs('journalReportType');
const journalStreamWrap = qs('journalStreamWrap');
const journalCasterWrap = qs('journalCasterWrap');
const journalTitleWrap = qs('journalTitleWrap');
const journalAuthorWrap = qs('journalAuthorWrap');

if (journalReportType) {
    function updateJournalView() {
        if (journalReportType.value === 'news') {
            if (journalStreamWrap) journalStreamWrap.style.display = 'none';
            if (journalCasterWrap) journalCasterWrap.style.display = 'none';
            if (journalTitleWrap) journalTitleWrap.classList.remove('hidden');
            if (journalAuthorWrap) journalAuthorWrap.classList.add('full'); 
        } else {
            if (journalStreamWrap) journalStreamWrap.style.display = '';
            if (journalCasterWrap) journalCasterWrap.style.display = '';
            if (journalTitleWrap) journalTitleWrap.classList.add('hidden');
            if (journalAuthorWrap) journalAuthorWrap.classList.remove('full'); 
        }
    }
    
    journalReportType.addEventListener('change', updateJournalView);
    updateJournalView(); 
}

if (btnJournal) {
    function shortenUrl(url) {
        let clean = url.replace(/^https?:\/\//, "").replace(/^www\./, "");
        if (clean.startsWith("vk.com/")) {
            let part = clean.split("/")[1];
            return part ? part.split("?")[0] : "vk.com";
        }
        return clean.split("/")[0];
    }

    function formatJournalText(text, applyLinksAndIds = true) {
        let t = text || "Текст.";
        t = t.replace(/●/g, "[size=15]•[/size]");
        t = t.replace(/○/g, "[size=15]∘[/size]");
        t = t.replace(/^(\s*)(\d+\.)/gm, "$1[b]$2[/b]");
        
        if (applyLinksAndIds) {
            t = t.replace(/catwar\.(?:net|su)\/blog(\d+)/gi, (match, id) => `[url=blog${id}]блог[/url]`);
            const linkRegex = /(https?:\/\/\S+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/\S*)/g;
            t = t.replace(linkRegex, (match) => {
                if (match.includes("blog")) return match; 
                const fullUrl = match.startsWith("http") ? match : "https://" + match;
                const shortText = shortenUrl(match);
                return `[url=${fullUrl}]${shortText}[/url]`;
            });
            t = t.replace(/\[(\d+)\](?!\s*\(\[link\1\]\))/g, (match, id) => `${match} ([link${id}])`);
        }
        return t;
    }

    btnJournal.onclick = () => {
        const isNews = journalReportType.value === 'news';
        const d = new Date();
        const today = String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(-2);
        
        const titleVal = qs('journalTitle')?.value || "ЗАГОЛОВОК";
        const dateVal = isNews ? titleVal : today;
        
        const newsTxt = formatJournalText(qs('journalNews').value, true);
        const streamTxt = formatJournalText(qs('journalStream').value, false);
        
        const authorId = qs('journalAuthorId').value.trim() || "ID";
        let casterId = qs('journalCasterId').value.trim();
        if (!casterId) casterId = authorId;

        let template = '';
        if (!isNews) {
            template = `[font=cambria][size=13][color=#4B2F1F][bgrf=#654E3D][pad=4 3 4 4][justify][divr=https://sun9-43.userapi.com/s/v1/ig2/sUh1KyKKa-ddjBYNhsuK8Pm249btOow7ykVEhNJC0WwFMj3zK7G_QDk5jjUIUd_b9Jv8dhNOAMH2eIUD9ybQOlRA.jpg?quality=95&as=32x64,48x96,72x144,108x216,160x320,240x480,360x720,480x960,540x1080,564x1128&from=bu&u=Fxn8BVgwWe5NLzoYlYSmjr08gvhZpXZDwpuVSbIrwQE&cs=564x0][bgrf=#C4A78D99][center][font=georgia][b][size=16][color=#4B2F1F][pad=8]СОБРАНИЕ, ${dateVal}[/pad][/color][/size][/b][/font][/center][/bgrf][bgrf=#654E3D][pad=1.5][/pad][/bgrf][bgrf=#F3EADBCC][pad=20][bgrf=#A98A7077][pad=3][font=georgia][b][size=14][color=#4B2F1F] НОВОСТИ[/color][/size][/b][/font][/pad][/bgrf][br]${newsTxt}[br][size=9]Пост составил: [cat${authorId}] [${authorId}][/size][br][br][bgrf=#A98A7077][pad=3][font=georgia][b][size=14][color=#4B2F1F][center][ [header=блок1]РАСКРЫТЬ ТРАНСЛЯЦИЮ СОБРАНИЯ[/header] ][/center][/color][/size][/b][/font][/pad][/bgrf][block=блок1][br]${streamTxt}[br][size=9]Транслировал собрание: [cat${casterId}] [${casterId}][/size][/block][/pad][/bgrf][/divr][/justify][/pad][/bgrf][/color][/size][/font]`;
        } else {
            template = `[font=cambria][size=13][color=#4B2F1F][bgrf=#654E3D][pad=4 3 4 4][justify][divr=https://sun9-43.userapi.com/s/v1/ig2/sUh1KyKKa-ddjBYNhsuK8Pm249btOow7ykVEhNJC0WwFMj3zK7G_QDk5jjUIUd_b9Jv8dhNOAMH2eIUD9ybQOlRA.jpg?quality=95&as=32x64,48x96,72x144,108x216,160x320,240x480,360x720,480x960,540x1080,564x1128&from=bu&u=Fxn8BVgwWe5NLzoYlYSmjr08gvhZpXZDwpuVSbIrwQE&cs=564x0][bgrf=#C4A78D99][center][font=georgia][b][size=16][color=#4B2F1F][pad=8]${dateVal}[/pad][/color][/size][/b][/font][/center][/bgrf][bgrf=#654E3D][pad=1.5][/pad][/bgrf][bgrf=#F3EADBCC][pad=20][bgrf=#A98A7077][pad=3][font=georgia][b][size=14][color=#4B2F1F] НОВОСТИ[/color][/size][/b][/font][/pad][/bgrf][br]${newsTxt}[br][size=9]Пост составил: [cat${authorId}] [${authorId}][/size][/pad][/bgrf][/divr][/justify][/pad][/bgrf][/color][/size][/font]`;
        }
        qs('journalResult').value = template;
    };
}

