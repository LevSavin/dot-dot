class Checkbox {
    constructor() {
        const temperature = this.setVisual(document.querySelector("#temperature-regime"));
    }

    setVisual($element) {
        $element.addEventListener('click', () => {
            document.querySelector(".temperature").classList.toggle("visually-hidden")
        })
    }

}

const checkbox = new Checkbox()

$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 200;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    let div = $('<span>', {
        class: 'select-tittle',
        text: _this.children('option:selected').text(),
    })
    let isDisabled = _this.children('option:selected').prop("disabled");
    if (isDisabled) {
        div.css('color', '#CFCFCF');
    }
    div.insertAfter(_this);

    const selectTittle = _this.next('.select-tittle');
    selectTittle.wrap('<div class="new-select"></div>');

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 0; i < selectOptionLength; i++) {
        let isDisabled = selectOption.eq(i).prop("disabled");
        if (!isDisabled) {
            $('<div>', {
                    class: 'new-select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                let chooseItem = $(this).data('value');

                $('.new-select.on').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());

                selectList.slideUp(duration);
                selectHead.removeClass('on');
                selectHead.css('color', '#000000');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);            
        }
    });
});