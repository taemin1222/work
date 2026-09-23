/**
 * [AppShowcase.js] ONCE, ONE'S BY JOSUN HOTEL 쇼케이스 메인 진입점
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. 서비스 인스턴스 생성
  const spaceService = new SpaceService(SPACE_DATA);
  const productService = new ProductService(PRODUCT_DATA);
  const cartService = new CartService();
  const quizService = new QuizService();
  const modalService = new ModalService();

  // 2. DOM 요소 참조
  const mainTabSpaces = document.getElementById('tabBtnSpaces');
  const mainTabProducts = document.getElementById('tabBtnProducts');
  const filterChipsWrap = document.getElementById('filterChipsWrap');
  const filterMetaCount = document.getElementById('filterMetaCount');
  const cardsGridContainer = document.getElementById('cardsGridContainer');

  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const btnCartToggle = document.getElementById('btnCartToggle');
  const btnCartClose = document.getElementById('btnCartClose');
  const cartBadge = document.getElementById('cartBadge');

  const btnHeroVideo = document.getElementById('btnHeroVideo');
  const btnHeroCurator = document.getElementById('btnHeroCurator');
  const btnNavCurator = document.getElementById('btnNavCurator');
  const btnHeroCardnews = document.getElementById('btnHeroCardnews');

  let activeMainTab = 'spaces'; // 'spaces' | 'products'

  // 3. 서브 필터 정의
  const SPACE_FILTERS = [
    { key: 'all', label: '전체 공간' },
    { key: 'trackA', label: 'Track A (Complete Privacy)' },
    { key: 'trackB', label: 'Track B (Soft Connection)' },
    { key: '레스케이프', label: '레스케이프 호텔' },
    { key: '웨스틴 조선', label: '웨스틴 조선 서울' },
    { key: '그랜드 조선', label: '그랜드 조선 부산' }
  ];

  const PRODUCT_FILTERS = [
    { key: 'all', label: '전체 상품/패키지' },
    { key: 'package', label: '1인 스테이 패키지' },
    { key: 'gourmet', label: '고메 & 룸서비스' },
    { key: 'goods', label: '브랜드 한정판 굿즈' }
  ];

  /**
   * 장바구니 뱃지 및 드로어 동기화
   */
  function syncCartUI() {
    const count = cartService.getTotalCount();
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';

    cartService.renderDrawer(cartDrawerOverlay, (items, totalAmount) => {
      // 체크아웃(예약) 버튼 클릭
      cartDrawerOverlay.classList.remove('open');
      modalService.openBookingModal({ name: `장바구니 패키지 (총 ${count}건)` }, (bookingInfo) => {
        cartService.clear();
        syncCartUI();
        modalService.openBookingCompleteModal(bookingInfo);
      });
    });
  }

  cartService.onChange(() => syncCartUI());
  syncCartUI();

  // 4. 서브 필터 칩 렌더러
  function renderSubFilters(filters, activeKey, onSelect) {
    filterChipsWrap.innerHTML = '';
    filters.forEach(f => {
      const chip = document.createElement('button');
      chip.className = `filter-chip ${f.key === activeKey ? 'active' : ''}`;
      chip.textContent = f.label;
      chip.addEventListener('click', () => onSelect(f.key));
      filterChipsWrap.appendChild(chip);
    });
  }

  /**
   * 메인 카드 그리드 렌더러
   */
  function refreshGrid() {
    if (activeMainTab === 'spaces') {
      const filtered = spaceService.filterSpaces(spaceService.currentFilter);
      filterMetaCount.innerHTML = `총 <span>${filtered.length}</span>개의 프리미엄 공간`;

      renderSubFilters(SPACE_FILTERS, spaceService.currentFilter, (key) => {
        spaceService.currentFilter = key;
        refreshGrid();
      });

      spaceService.renderCards(
        cardsGridContainer,
        filtered,
        // 공간 상세보기
        (space) => {
          modalService.openSpaceDetailModal(space, (targetSpace) => {
            modalService.openBookingModal(targetSpace, (bookingInfo) => {
              modalService.openBookingCompleteModal(bookingInfo);
            });
          });
        },
        // 공간 예약하기
        (space) => {
          modalService.openBookingModal(space, (bookingInfo) => {
            modalService.openBookingCompleteModal(bookingInfo);
          });
        }
      );

    } else {
      const filtered = productService.filterProducts(productService.currentFilter);
      filterMetaCount.innerHTML = `총 <span>${filtered.length}</span>개의 1인 혜택 상품`;

      renderSubFilters(PRODUCT_FILTERS, productService.currentFilter, (key) => {
        productService.currentFilter = key;
        refreshGrid();
      });

      productService.renderCards(
        cardsGridContainer,
        filtered,
        // 상품 상세보기
        (product) => {
          modalService.openProductDetailModal(product, (p) => {
            cartService.addItem(p, 'product');
          });
        },
        // 장바구니 담기
        (product) => {
          cartService.addItem(product, 'product');
          modalService.showToast(`[${product.name}] 장바구니에 담겼습니다.`);
        }
      );
    }
  }

  // 5. 탭 전환 이벤트 바인딩
  mainTabSpaces.addEventListener('click', () => {
    activeMainTab = 'spaces';
    mainTabSpaces.classList.add('active');
    mainTabProducts.classList.remove('active');
    refreshGrid();
  });

  mainTabProducts.addEventListener('click', () => {
    activeMainTab = 'products';
    mainTabProducts.classList.add('active');
    mainTabSpaces.classList.remove('active');
    refreshGrid();
  });

  // 6. 장바구니 드로어 열기/닫기
  btnCartToggle.addEventListener('click', () => {
    cartDrawerOverlay.classList.add('open');
  });

  btnCartClose.addEventListener('click', () => {
    cartDrawerOverlay.classList.remove('open');
  });

  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('open');
    }
  });

  // 7. 히어로 액션 버튼들
  if (btnHeroVideo) {
    btnHeroVideo.addEventListener('click', () => {
      modalService.openVideoModal();
    });
  }

  if (btnHeroCardnews) {
    btnHeroCardnews.addEventListener('click', () => {
      modalService.openCarouselModal();
    });
  }

  // 8. AI 1인 취향 큐레이터 인터랙션
  function startTasteCurator() {
    quizService.reset();
    renderQuizStep();
    modalService.modalBackdrop.classList.add('open');
  }

  function renderQuizStep() {
    if (quizService.isFinished()) {
      const result = quizService.getResult();
      modalService.modalContainer.innerHTML = `
        <div class="modal-content-box quiz-box" style="text-align: center;">
          <button class="btn-modal-close" id="btnQuizClose">&times;</button>
          <span class="quiz-step-pill">${result.badge}</span>
          <h2 style="font-size: 1.7rem; font-weight: 800; color: #09241C; margin: 0.6rem 0 0.3rem;">
            ${result.title}
          </h2>
          <p style="font-size: 0.95rem; color: #C5A880; font-weight: 700; margin-bottom: 1.4rem;">
            "${result.tagline}"
          </p>

          <div style="border-radius: 14px; overflow: hidden; height: 180px; margin-bottom: 1.2rem; background: #000;">
            <img src="${result.image}" alt="${result.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='01.png'" />
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.2rem; text-align: left; margin-bottom: 1.5rem;">
            <div style="font-size: 0.78rem; color: #94A3B8; font-weight: 700;">추천 1인 공간 & 패키지</div>
            <div style="font-size: 1.1rem; font-weight: 800; color: #0F382C; margin-top: 0.2rem;">${result.spaceName}</div>
            <div style="font-size: 0.92rem; font-weight: 700; color: #334155; margin-top: 0.2rem;">+ ${result.productName}</div>
            <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.6rem; line-height: 1.5;">${result.summary}</p>
          </div>

          <div style="display: flex; gap: 0.8rem;">
            <button class="btn-card-secondary" id="btnQuizRetry" style="flex: 1; padding: 0.9rem;">다시 테스트</button>
            <button class="btn-card-primary" id="btnQuizAddCart" style="flex: 2; padding: 0.9rem; font-size: 1rem;">
              추천 패키지 장바구니 담기
            </button>
          </div>
        </div>
      `;

      document.getElementById('btnQuizClose').addEventListener('click', () => modalService.closeModal());
      document.getElementById('btnQuizRetry').addEventListener('click', () => startTasteCurator());
      document.getElementById('btnQuizAddCart').addEventListener('click', () => {
        const prod = PRODUCT_DATA.find(p => p.id === result.productId);
        if (prod) {
          cartService.addItem(prod, 'package');
          modalService.closeModal();
          modalService.showToast(`[${prod.name}] 추천 패키지를 담았습니다.`);
        }
      });
      return;
    }

    const q = quizService.questions[quizService.currentStep];
    const stepNum = quizService.currentStep + 1;
    const totalSteps = quizService.questions.length;

    modalService.modalContainer.innerHTML = `
      <div class="modal-content-box quiz-box">
        <button class="btn-modal-close" id="btnQuizClose">&times;</button>
        <div class="quiz-header">
          <span class="quiz-step-pill">QUESTION 0${stepNum} / 0${totalSteps}</span>
          <h3 class="quiz-question-title">${q.question}</h3>
        </div>
        <div class="quiz-options-list">
          <button class="quiz-option-btn" id="btnOptA">
            <div class="quiz-opt-title">A. ${q.options[0].title}</div>
            <div class="quiz-opt-sub">${q.options[0].sub}</div>
          </button>
          <button class="quiz-option-btn" id="btnOptB">
            <div class="quiz-opt-title">B. ${q.options[1].title}</div>
            <div class="quiz-opt-sub">${q.options[1].sub}</div>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnQuizClose').addEventListener('click', () => modalService.closeModal());
    document.getElementById('btnOptA').addEventListener('click', () => {
      quizService.selectOption(q.options[0].track);
      renderQuizStep();
    });
    document.getElementById('btnOptB').addEventListener('click', () => {
      quizService.selectOption(q.options[1].track);
      renderQuizStep();
    });
  }

  if (btnHeroCurator) btnHeroCurator.addEventListener('click', startTasteCurator);
  if (btnNavCurator) btnNavCurator.addEventListener('click', startTasteCurator);

  // 9. 초기 렌더링 시작
  refreshGrid();
});
