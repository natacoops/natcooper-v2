<section id="workSlider" class="workSlider wrapper">
	
	<ul class="slickSlide">
		<li data-work="code-mobile" class="slider-item"><a href="code-mobile"><p><span>Code Mobile</span></p><img src="../img/swork-code-mobile.png" alt=""></a></li>
		<li data-work="hyalumni-lounge" class="slider-item"><a href="hyalumni-lounge"><p><span>HackerYou Alumni Lounge</span></p><img src="../img/swork-hyalumni-lounge.jpg" alt=""></a></li>
		<li data-work="bite-diabetes" class="slider-item"><a href="bite-diabetes"><p><span>Bite Diabetes</span></p><img src="../img/swork-bite-diabetes.jpg" alt=""></a></li>
		<li data-work="mothers-day" class="slider-item"><a href="mothers-day"><p><span>Mother's Day</span></p><img src="../img/swork-mothersday.jpg" alt=""></a></li>					
		<li data-work="indigo-custom-shops" class="slider-item"><a href="indigo-custom-shops"><p><span>Indigo Custom Online Shops</span></p><img src="../img/swork-indigo.jpg" alt=""></a></li>
		<li data-work="casa-loma" class="slider-item"><a href="casa-loma"><p><span>Casa Loma<br>(Case Study)</span></p><img src="../img/swork-casaloma.jpg" alt=""></a></li>
	</ul>
	
</section>
	
<script>
	$('.slider-item').each(function(i, slide) {
		if (window.location.pathname.slice(6) == $(slide).data('work')) {
			$(slide).remove();
		}
	});
</script>