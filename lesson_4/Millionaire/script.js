var event, stat, safe, won;

do{
	stat = 'Добро пожаловать в игру "Кто хочет стать миллионером?"\n В качестве ответа используйте число, указанное напротив выбранного варианта ответа.\n Удачи!\n\n\n';
	
	stat += 'Укажите несгораемую сумму:\n';
	for(var i = q.length;i>0;i=i-3)
		stat += (i/3)+'. '+q[i-3]+'руб.\n';
	stat += '\n -1 - для выхода из игры.';
	event = parseInt(prompt(stat));
	won = 0;
	if(event==-1)
		break;
	if (event>0 && event<=(q.length/3)){
		safe = q[event*3-3];
		break;
	}
}while(true)

if(event!==-1)
	for(i=0;i<q.length;i=i+3){
		stat = 'Вопрос №'+(i/3+1)+' на сумму '+q[i]+'руб.\n\n';
		if(safe==q[i])
			stat = 'Вопрос №'+(i/3+1)+' на НЕСГОРАЕМУЮ сумму '+q[i]+'руб.\n\n';
		
		if(safe<q[i])
			stat += 'Несгораемая сумма ' + safe + 'руб. УЖЕ преодолена! \n\n';
		
		if(won==0){
			stat += q[i+1] +'\n\n -1 - для выхода из игры.';
		}
		else{
			stat += q[i+1] +'\n\n -1 - забрать выигрыш '+won+'руб. и покинуть игру.';
		}
			
		event = parseInt(prompt(stat));
		if(event>=-1 && event<=4 && event!==0){
			if(event==q[i+2]){
				won=q[i]
			}
			else if(event==-1){
				break;
			}
			else{
				if(q[i]>safe){
					won=safe;
				}
				else{
					won=0;
				}
				alert('Ответ неверный...');
				break;
			}
			
		}
		else {
			alert('Введено недопустимое значение!');
			i=i-3;
		}
		
	}

if (won==0){
	alert('Ждём вас снова!');
}
else if(won==q[q.length-3]){
	alert('Поздравляем вы являетесь ПОБЕДИТЕЛЕМ игры!!! И ваш выигрыш составил '+won+'руб. Ждём вас снова!');
}
else{
	alert('Поздравляем!!! Ваш выигрыш составил '+won+'руб. Ждём вас снова!');
}