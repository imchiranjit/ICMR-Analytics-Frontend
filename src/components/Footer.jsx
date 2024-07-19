export default function Footer(){
    return(
        <footer className="bg-[#10131c] h-[80px]">
            <div className="flex justify-center gap-12 pt-1">
                <a href="" target="_blank" className="text-[1.5rem] text-slate-200"><i class="uil uil-twitter"></i></a>
                <a href="mailto:" target="_blank" className="text-[1.5rem] text-slate-200"><i class="uil uil-envelope"></i></a>
                <a href="" target="_blank" className="text-[1.5rem] text-slate-200"><i class="uil uil-youtube"></i></a>
            </div>
            <h4 className="text-center text-xl font-noto-sans text-slate-200">&#169; Jawaharlal Nehru University</h4>
        </footer>
    )
}