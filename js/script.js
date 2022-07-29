$(document).ready(function(){
			// 네비게이션
			$('a.skin01').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#skin').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.body02').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#body').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.hair03').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#hair').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.frag04').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#fragrance').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.home05').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#home').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.kits06').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#travel').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.gift07').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#gift').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.read08').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#read').css('display','flex');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.store09').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#store').css('display','block');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.search10').click(function(){
				$('div.submenu').css('display','none');
				$('div.middlewrap').css('display','block');
				$('div.submenu#search').css('display','block');
				$('div.lowfloor').show().css('position','fixed');
			});
			$('a.close11').click(function(){
				$('div.middlewrap').css('display','none');
				$('div.lowfloor').css('display','none');

			});


			// 로그인 모달
			$('.logIn').click(function(){
				$('div.modal').addClass('show');
			});
			$('#close01').click(function(){
				$('div.modal').removeClass('show');
			});

			// 카트 슬라이딩
			$('.mycart').click(function(){
				$('div.cart').slideDown(300);
			});
			$('div.cart').mouseout(function(){
				$(this).stop().slideUp();
			});


			// 커서 포인터
			$('p.right').mouseover(function(){
				$(this).css('cursor','pointer');
			});
			$('p.left').mouseover(function(){
				$(this).css('cursor','pointer');
			});

			// 제품바로가기(신제품)-마우스오버
			$('#newProd').on('mouseover',function(){
				if($('#newProd ul.sliding li').last().is(':visible')) {
					$('p.left.sec01').stop().animate({width:78},400,'swing');
					$('p.right.sec01').stop().animate({width:0},400,'swing');
				}else{
					$('p.right.sec01').stop().animate({width:78},400,'swing');
					$('p.left.sec01').stop().animate({width:0},400,'swing');
				}
			});
			$('#newProd').mouseout(function(){
				$('p.right.sec01').stop().animate({width:0},400,'swing');
				$('p.left.sec01').stop().animate({width:0},400,'swing');
			})


			// 제품바로가기(신제품)-이동
			$('.right.sec01').click(function(){
				$('#newProd ul.sliding li').last().css('display','block')
				$('#newProd ul.sliding.new').animate({marginLeft:'-25%'},500,'swing',function(){
					$('#newProd ul.sliding li').first().css('visibility','hidden');
				});
				$('.selectBar.sec01').animate({left:'50%'},800,'swing');
			});
			$('.left.sec01').click(function(){
				$('#newProd ul.sliding li').first().css('visibility','visible')
				$('#newProd ul.sliding.new').animate({marginLeft:'0%'},500,'swing',function(){
					$('#newProd ul.sliding li').last().css('display','none');
				});
				$('.selectBar.sec01').animate({left:'0%'},800,'swing');
			});


			// 제품바로가기(인기제품)-마우스오버
			$('#best').on('mouseover',function(){
				if($('#best ul.sliding.best li').last().is(':visible')) {
					$('p.left.sec07').stop().animate({width:78},400,'swing');
					$('p.right.sec07').stop().animate({width:0},400,'swing');
				}else if($('#best ul.sliding.best li:nth-child(5)').is(':visible')){
					$('p.left.sec07').stop().animate({width:78},400,'swing');
					$('p.right.sec07').stop().animate({width:78},400,'swing');
				}else{
					$('p.right.sec07').stop().animate({width:78},400,'swing');
					$('p.left.sec07').stop().animate({width:0},400,'swing');
				}
			});
			$('#best').mouseout(function(){
				$('p.left.sec07').stop().animate({width:0},400,'swing');
				$('p.right.sec07').stop().animate({width:0},400,'swing');
			});

			// 제품바로가기(인기제품)-오른쪽화살표
			$('p.right.sec07').on('click',function(){
				// 마지막제품이 보이면 화살표 감추기
				if($('#best ul.sliding.best li').last().is(':visible')) {
					$('p.right.sec07').stop().animate({width:0},400,'swing');
						// 다섯번째 제품이 보이면 
				}else if($('#best ul.sliding.best li:nth-child(5)').is(':visible')){
					// 마지막제품이 보이면서 -50%로 이동 / 두번째 제품안보이게	
					$('#best ul.sliding.best li').last().css('display','block');
					$('#best ul.sliding.best').animate({marginLeft:'-50%'},500,'swing', function(){
						$('#best ul.sliding.best li.two').addClass('hidden');
					});
					// 셀렉트바를 66.66%위치로 이동
					$('#best span.selectBar.sec07').animate({left:'66.66%'},500,'swing');
				}else {
					// 다섯번째, 마지막 제품이 안보이면 다섯번째 제품 보이게하고 -25% 이동 / 셀렉트바 33.33%이동
					$('#best ul.sliding.best li:nth-child(5)').css('display','block');
					$('#best ul.sliding.best').animate({marginLeft:'-25%'},500,'swing', function(){
						$('#best ul.sliding.best li.one').addClass('hidden');
					});
					$('#best span.selectBar.sec07').animate({left:'33.3%'},500,'swing');
				}
			});


			// 제품바로가기(인기제품)-왼쪽화살표
			$('p.left.sec07').on('click',function(){
				if($('#best ul.sliding.best li a').first().is(':visible')){
					$('p.left.sec07').stop().animate({width:0},400,'swing');
				}else if($('#best ul.sliding.best li:nth-child(2) a').is(':visible')){
					$('#best ul.sliding.best li').first().removeClass('hidden')
					$('#best ul.sliding.best').animate({marginLeft:'0%'},500,'swing',function(){
						$('#best ul.sliding.best li:nth-child(5)').css('display','none');
					});
					$('#best span.selectBar.sec07').animate({left:'0%'},500,'swing');
				}else{
					$('#best ul.sliding.best li:nth-child(2)').removeClass('hidden')
					$('#best ul.sliding.best').animate({marginLeft:'-25%'},500,'swing',function(){
					  $('#best ul.sliding.best li:nth-child(6)').css('display','none');
					});
					$('#best span.selectBar.sec07').animate({left:'33.3%'},500,'swing');
				}
			});


			// $('#best ul.sliding.best li').first().css('visibility','visible')
			// 	$('#best ul.sliding.best li:nth-child(2)').css('visibility','visible')
			// 	$('#best ul.sliding.best').animate({marginLeft:'0%'},500,'swing',function(){
			// 		$('#best ul.sliding.best li:nth-child(5)').css('display','none');
			// 	});
			// 	$('#best span.selectBar.sec07').animate({left:'0%'},500,'swing');




			// 스토어 로케이터
			setInterval(function(){
				$('div.storewrap').delay(3000);
				$('div.storewrap').animate({marginLeft:'-100%'},1000,'swing', function(){
					$('div.storewrap>a:first').appendTo('div.storewrap');
					$('div.storewrap').css('marginLeft','0px');
				});
				
				$('div.namewrap').animate({top:'93%'},700,'swing');
				$('div.namewrap').delay(2800);
				$('div.namewrap').animate({top:'105%'},500,'swing', function(){
					$('div.namewrap>p.storename:first').appendTo('div.namewrap');
					$('div.namewrap>p.storename').css('top','105%');
					$('div.namewrap>p.storename').removeClass('shoploca');
					$('div.namewrap>p.storename:first').addClass('shoploca');
				});

				$('span.selectBar.store').delay(2800);
				$('span.selectBar.store').animate({left:'+33.33%'},1200,'swing');
				$('span.selectBar.store').delay(2800);
				$('span.selectBar.store').animate({left:'+66.66%'},1200,'swing');
				$('span.selectBar.store').delay(2800);
				$('span.selectBar.store').animate({left:'0%'},1200,'swing');
			});


			// 배송조회 모달
			$('#delivery').click(function(){
				$('div.tracking').addClass('check');
			});
			$('#close02').click(function(){
				$('div.tracking').removeClass('check');
			});
		});