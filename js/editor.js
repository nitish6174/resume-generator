spaceList = document.querySelectorAll('.space');
for(var i=0;i<spaceList.length;i++)
{
	var count = spaceList[i].dataset.spaces;
	for(var j=0;j<count;j++)
		spaceList[i].innerHTML += '&nbsp';
}

$('.toggle-option').click(function(){
	if(!$(this).hasClass('selected'))
	{
		toggleType = $(this).attr('data-toggle');
		toggleValue = $(this).attr('id');
		switch(toggleType)
		{
			case 'minor':
				if(toggleValue=='minorShow')
				{
					$('#contentMinor').show();
					$('#image_box').css('margin-top','35px');
				}
				else
				{
					$('#contentMinor').hide();
					$('#image_box').css('margin-top','30px');
				}
				break;
			case 'contact':
				if(toggleValue=='contact3')
				{
					$('#contactLink1').hide();
					$('#contactLink2').hide();
					$('#contact').css('margin-top','45px');
				}
				else if(toggleValue=='contact4')
				{
					$('#contactLink1').show();
					$('#contactLink2').hide();
					$('#contact').css('margin-top','35px');
				}
				else
				{
					$('#contactLink1').show();
					$('#contactLink2').show();
					$('#contact').css('margin-top','25px');
				}
				break;

			case 'font':
				if(toggleValue=='fontSans')
				{
					$('#page').removeClass('serif');
					$('#page').addClass('sans');
				}
				else
				{
					$('#page').removeClass('sans');
					$('#page').addClass('serif');
				}
				break;
			case 'case':
				if(toggleValue=='caseNormal')
					$('.section-title').removeClass('uppercase');
				else
					$('.section-title').addClass('uppercase');
				break;
			case 'title':
				if(toggleValue=='titleRuled')
				{
					$('.section-title').removeClass('shaded');
					$('.section-title').addClass('ruled');
				}
				else
				{
					$('.section-title').removeClass('ruled');
					$('.section-title').addClass('shaded');
				}
				break;
			case 'rule':
				if(toggleValue=='ruleAbove')
				{
					$('.section-title').removeClass('rule-below');
					$('.section-title').addClass('rule-above');
				}
				else
				{
					$('.section-title').removeClass('rule-above');
					$('.section-title').addClass('rule-below');
				}
				break;

			case 'image':
				if(toggleValue=='imageShow')
				{
					$('#image_box').show();
					$('#info').css('margin-left','0px');
				}
				else
				{
					$('#image_box').hide();
					$('#info').css('margin-left','20px');
				}
				break;
			case 'roll':
				if(toggleValue=='rollShow')
				{
					$('#contentRoll').show();
					$('#info').css('margin-top','0px');
				}
				else
				{
					$('#contentRoll').hide();
					$('#info').css('margin-top','10px');
				}
				break;
			case 'table':
				if(toggleValue=='tableShow')
				{
					$('#educationTable').removeClass('borderless');
					$('#educationTable').addClass('customBordered');
				}
				else
				{
					$('#educationTable').removeClass('customBordered');
					$('#educationTable').addClass('borderless');
				}
				break;
			case 'edyear':
				if(toggleValue=='edyearFirst')
				{
					$("#educationTable tr").each(function () {
						$(this).find("td").eq(0).before($(this).find("td").eq(3));
					});
				}
				else
				{
					$("#educationTable tr").each(function () {
						$(this).find("td").eq(3).after($(this).find("td").eq(0));
					});
				}
				break;
			case 'experience':
				if(toggleValue=='experience1')
				{
					$("#sectionExperience .title , #sectionExperience .time").css('display','block');
					$("#sectionExperience .time").removeClass('right').addClass('tab');
					$("#sectionExperience .link").hide();
				}
				else
				{
					$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
					$("#sectionExperience .time").addClass('right').removeClass('tab');
					$("#sectionExperience .link").show();
				}
				break;
			case 'projects':
				if(toggleValue=='projects1')
				{
					$("#sectionProjects .title , #sectionProjects .time").css('display','block');
					$("#sectionProjects .time").removeClass('right');
					$("#sectionProjects .mentor , #sectionProjects .link").hide();
				}
				else
				{
					$("#sectionProjects .title , #sectionProjects .time").css('display','inline-block');
					$("#sectionProjects .time").addClass('right');
					$("#sectionProjects .mentor , #sectionProjects .link").show();
				}
				break;
		}
		$('.toggle-option[data-toggle="'+toggleType+'"]').removeClass('selected');
		$(this).addClass('selected');
	}
});


$('#page').addClass('serif');
$('.section-title').addClass('ruled');
$('.section-title').addClass('rule-above');
$("#sectionExperience .link").hide();
$("#sectionExperience .time , #sectionProjects .time").addClass('tab');
$("#sectionProjects .mentor , #sectionProjects .link").hide();


$('#minorShow').addClass('selected');
$('#contact5').addClass('selected');

$('#fontSerif').addClass('selected');
$('#caseNormal').addClass('selected');
$('#titleRuled').addClass('selected');
$('#ruleAbove').addClass('selected');

$('#imageShow').addClass('selected');
$('#rollShow').addClass('selected');
$('#tableShow').addClass('selected');
$('#edyearFirst').addClass('selected');
$('#experience1').addClass('selected');
$('#projects1').addClass('selected');



document.querySelector('#page').contentEditable = true;