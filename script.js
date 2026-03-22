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
        'Сверкающая жемчужина': [], 'Менестрель слова': [], 'Дары морей': ['стандарт', 'без карты'],
        'Опытный чтец': [], 'Искусный травовед': ['стандарт', 'доп. вариант черный'], 'Пилигрим': [],
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

function getMoscowDate() {
    try {
        const parts = new Intl.DateTimeFormat('ru-RU', {
            timeZone: 'Europe/Moscow',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
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
    d.setDate(d.getDate() - 2);
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
    select.selectedIndex = 1;
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
    let text = `[b]Доказательства:[/b] [url=${links[0]}]скриншот[/url]`;
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

fillValidDates();
fillSelect(qs('awardsDol'), positions);
fillSelect(qs('rankType'), Object.keys(rankTypes));
fillSelect(qs('rankMentor'), mentorOptions);

document.querySelectorAll('.acc-head').forEach(btn => {
    btn.addEventListener('click', function () {
        const currentItem = this.closest('.acc-item');
        document.querySelectorAll('.acc-item').forEach(item => { if (item !== currentItem) item.classList.remove('open'); });
        currentItem.classList.toggle('open');
    });
});

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        setForm(btn.dataset.form);
        qs('workAreaTitle').textContent = e.target.textContent.trim();
        
        // Железобетонный способ смены ссылки (работает везде)
        window.location.hash = btn.dataset.form;
    });
});

function updateRankFields() {
    const cfg = rankTypes[qs('rankType').value];
    qs('rankMentorWrap').classList.toggle('hidden', !cfg.mentor);
    qs('rankPirateWrap').classList.toggle('hidden', !cfg.pirate);
    qs('rankFemWrap').classList.toggle('hidden', !cfg.fem);
}
if(qs('rankType')) qs('rankType').onchange = updateRankFields;

if(qs('rankGenerate')) {
    qs('rankGenerate').onclick = () => {
        const cfg = rankTypes[qs('rankType').value];
        const id = qs('rankId').value.trim() || 'ID';
        const nameInput = qs('rankName');
        const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : '-';
        const date = qs('rankDate').value;
        const proofs = makeProofs(qs('rankProof').value);
        const speech = qs('rankSpeech').value;

        let text = `Я, [link${id}] [${id}], желаю посвятиться в [b]${cfg.label}[/b] (${date}).\n${proofs}\n[b]Имя:[/b] ${name}`;
        if (cfg.mentor) text += `\n[b]Наставник:[/b] ${qs('rankMentor').value}`;
        if (cfg.pirate) {
            const pName = qs('rankPirateName').value.trim();
            text += `\n[b]Пиратское имя:[/b] ${pName || '-'}`;
        }
        if (cfg.fem) text += `\n[b]Феминитив:[/b] ${qs('rankFeminine').value}`;
        text += `\n[b]Речь:[/b] ${speech}`;
        qs('rankResult').value = text;
    };
}

function syncAwardsGroups() {
    const modeSelect = qs('awardsMode');
    const mode = modeSelect.value;
    const label = qs('awardsGroupLabel'); 
    
    const selectedText = modeSelect.options[modeSelect.selectedIndex].text.replace('Запрос ', '');
    
    if (label) {
        label.textContent = 'Тип ' + selectedText;
    }

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
    const itemWrap = itemSelect.parentElement;

    if (mode === 'costume') {
        itemWrap.classList.remove('hidden');
        const items = Object.keys(costumeGroups[group] || {});
        fillSelect(itemSelect, items);
        itemSelect.onchange = () => {
            const vars = costumeGroups[group][itemSelect.value] || [];
            if (vars.length > 0) {
                wrap.classList.remove('hidden');
                qs('awardsVariantLabel').textContent = 'Вариант / Цвет';
                area.innerHTML = '<select id="awardsVariant"></select>';
                fillSelect(qs('awardsVariant'), vars);
            } else wrap.classList.add('hidden');
        };
        itemSelect.onchange();
    } else if (mode === 'title') {
        const userDol = qs('awardsDol').value;
        if (group === 'Прилагательная должность') {
            const items = titleGroups[group][userDol] || [];
            if (items.length === 0) {
                itemWrap.classList.add('hidden');
                wrap.classList.add('hidden');
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

document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.onclick = () => {
        const el = qs(btn.dataset.copy);
        if(el) {
            el.select();
            document.execCommand('copy');
        }
    };
});

const navToggle = qs('navToggle');
const navCol = qs('navCol');

if (navToggle && navCol) {
    navToggle.addEventListener('click', () => {
        navCol.classList.toggle('mobile-open');
        
        if (navCol.classList.contains('mobile-open')) {
            navToggle.textContent = 'Скрыть навигацию';
        } else {
            navToggle.textContent = 'Показать навигацию';
        }
    });
}

// --- ЛОГИКА ЭСКАДРЫ ---

// 1. Автоматическая дата при загрузке
if (qs('eskDate')) {
    qs('eskDate').value = getMoscowDate();
}

function calculateDuration() {
    const timeInput = qs('eskTime').value; 
    const durationField = qs('eskDuration');
    
    const times = timeInput.match(/(\d{1,2}):(\d{2})/g);
    
    if (times && times.length === 2) {
        const [startStr, endStr] = times;
        const [startH, startM] = startStr.split(':').map(Number);
        const [endH, endM] = endStr.split(':').map(Number);
        
        let startTotal = startH * 60 + startM;
        let endTotal = endH * 60 + endM;
        
        if (endTotal < startTotal) endTotal += 24 * 60;
        
        const diff = endTotal - startTotal;
        const h = Math.floor(diff / 60);
        const m = diff % 60;
        
        durationField.value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    } else {
        durationField.value = '';
    }
}

if (qs('eskTime')) {
    qs('eskTime').addEventListener('input', calculateDuration);
}

if (qs('eskGenerate')) {
    qs('eskGenerate').onclick = () => {
        const type = qs('eskType').value;
        const time = qs('eskTime').value.trim() || 'чч:мм - чч:мм';
        const id = qs('eskId').value.trim() || 'ID';
        const isLead = qs('eskIsLead').checked;

        const date = getMoscowDate();

        let duration = '00:00';
        const times = time.match(/(\d{1,2}):(\d{2})/g);
        
        if (times && times.length === 2) {
            const [startStr, endStr] = times;
            const [startH, startM] = startStr.split(':').map(Number);
            const [endH, endM] = endStr.split(':').map(Number);
            
            let startTotal = startH * 60 + startM;
            let endTotal = endH * 60 + endM;
            
            // Переход через полночь
            if (endTotal < startTotal) endTotal += 24 * 60;
            
            const diff = endTotal - startTotal;
            const h = Math.floor(diff / 60);
            const m = diff % 60;
            
            duration = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        }

        const leadSuffix = isLead ? ', ведущий' : '';

        const text = `[b]${type}[/b]\n[b]${date}[/b]; ${time} (${duration})\n[b]Участник[/b]: [[n]l[/n]ink${id}]${leadSuffix}`;
        
        qs('eskResult').value = text;
    };
}

const routes = {
    'sphere-squadron': 'escadra',
    'main-blog': 'main',
    'awards-blog': 'nagrady',
    'task-board': 'doska',
    'pirate-code': 'codex',
    'squad-seagulls': 'chaiki',
    'squad-kits': 'kiti',
    'squad-turtles': 'cherepahi',
    'squad-sharks': 'akula',
    'squad-octopus': 'osminogi', 
    'squad-flyingfish': 'letriba',  
    'squad-albatross': 'albatros',
    'squad-dolphins': 'delfin', 
    'squad-clownfish': 'clownriba',    
    'sphere-guardians': 'ohranka',
    'sphere-food': 'prodovolka',
    'sphere-heal': 'vrach',
    'shelter-blog': 'priyut',
};

function getHashByFormId(formId) {
    return routes[formId] || formId; 
}

function getFormIdByHash(hash) {
    for (let key in routes) {
        if (routes[key] === hash) return key;
    }
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
            
            // Открываем форму
            setForm(formId);
            qs('workAreaTitle').textContent = activeBtn.textContent.trim();
        }
    }
}

window.addEventListener('DOMContentLoaded', openTabFromHash);
window.addEventListener('hashchange', openTabFromHash);