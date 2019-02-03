const func3_1 = (obj: {txt: string}) => {
    console.log(obj.txt);
};

const o = {
    txt: 'str'
};
func3_1(o);

interface inter3_1 {
    txt: string;
};

const func3_2 = (obj: inter3_1) => {
    console.log(obj.txt);
};
func3_2({txt: 'ddd'});
